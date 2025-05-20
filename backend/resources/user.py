from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import UserModel
from schemas import UserSchema, UserUpdateSchema, PlainUserSchema, AuthUserSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
import uuid
from flask_jwt_extended import create_access_token, set_refresh_cookies, create_refresh_token, jwt_required, get_jwt_identity, get_jwt
from flask import request, jsonify
from passlib.hash import pbkdf2_sha512
from utils import role_required
from blocklist import BLOCKLIST	
import os
from utils import allowed_avatar_file, content_type_required

blp = Blueprint("users", __name__, description = "Operations on users")

@blp.route('/user/me')
class MyUser(MethodView):
    @blp.response(200, UserSchema)
    @jwt_required()
    def get(self):
        identity = get_jwt_identity()
        user = UserModel.query.get_or_404(identity)
        return user
    
    @jwt_required()
    def delete(self):
        identity = get_jwt_identity()
        user = UserModel.query.get_or_404(identity)
        db.session.delete(user)
        db.session.commit()
        return {"message": "User deleted", "code": 202}
    
    @blp.response(200, UserSchema)
    @jwt_required()
    def patch(self):
        try:
            identity = get_jwt_identity()
            user = UserModel.query.get_or_404(identity)
            user_data = request.get_json()
            
            if username := user_data.get("username", None):
                is_username_busy = UserModel.query.filter_by(username=username).first() is not None
                if is_username_busy and user.username != username:
                    abort(409, message="Username already exists")
                user.username = username
            if first_name := user_data.get("first_name", None):
                user.first_name = first_name
            if last_name := user_data.get("last_name", None):
                user.last_name = last_name
            if role := user_data.get("role", None):
                user.role = role
            if password := user_data.get("password", None):
                user.password = pbkdf2_sha512.hash(password)
        
            db.session.add(user)
            db.session.commit()
        except ValueError as error:
            abort(400, message=str(error))
    
 
        return user
            

        

@blp.route('/user/<string:user_id>')
class User(MethodView):
    @blp.response(200, UserSchema)
    @role_required(['admin', 'moderator'])
    def get(self, user_id):
        user = UserModel.query.get_or_404(user_id)
        return user
    
    @jwt_required()
    @role_required(['admin', 'moderator'])
    def delete(self, user_id):
        user = UserModel.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return {"message": "User deleted", "code": 202}

    @blp.response(200, UserSchema)        
    @blp.arguments(UserUpdateSchema)
    @jwt_required()
    @role_required(['admin', 'moderator'])
    def put(self, user_data, user_id):
        user = UserModel.query.get(user_id)
        
        if user:
            user.username = user_data["username"]
            user.fisrt_name = user_data["first_name"]
            user.last_name = user_data["last_name"]
            user.role = user_data["role"]
        else:
            user = UserModel(id = user_id, **user_data)
            
        db.session.add(user)
        db.session.commit()
        
        return user


@blp.route('/user')
class Users(MethodView):
    @blp.response(200, UserSchema(many = True))
    @jwt_required()
    @role_required(['moderator', 'admin'])
    def get(self):
        username_filter = request.args.get("username")
        first_name_filter = request.args.get("first_name")
        last_name_filter = request.args.get("last_name")
  
        query = UserModel.query
  
        query = query.filter(UserModel.username==username_filter) if username_filter else query
        query = query.filter(UserModel.first_name==last_name_filter) if first_name_filter else query
        query = query.filter(UserModel.last_name==first_name_filter) if last_name_filter else query
  
        return query.all()
    
       
@blp.route('/register')
class UserRegister(MethodView):
    @blp.arguments(UserSchema, location="form")
    @blp.response(201, UserSchema)
    @content_type_required(["multipart/form-data"])    
    def post(self, user_data):
        from app import app
        existing_user = UserModel.query.filter_by(username=user_data["username"]).first()
        if existing_user:
            abort(400, message = "Username already exists")
        user = UserModel(
      id = str(uuid.uuid4()),
      username=user_data["username"], 
      password=pbkdf2_sha512.hash(user_data["password"]), 
      first_name=user_data["first_name"],
      last_name=user_data["last_name"],
      )
        try:
            if 'avatar' in request.files:
                avatar_file = request.files.get('avatar')
                username = request.form.get("username")
                
                filename = os.path.splitext(avatar_file.filename)[0]
        
                if not allowed_avatar_file(avatar_file):
                    abort(400, description="Invalid avatar file format or file size")
        
                filename = os.path.join(app.config['AVATAR_UPLOAD_FOLDER'], user.id + ".png")
                avatar_file.save(filename)
            db.session.add(user)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message = "An error occured while inserting the user.")
    

    
        return user


@blp.route('/login')
class UserLogin(MethodView):
    @blp.arguments(AuthUserSchema)
    def post(self, user_data):
        user = UserModel.query.filter(
            UserModel.username == user_data["username"]
        ).first()
        
        if user and pbkdf2_sha512.verify(user_data["password"], user.password):
            access_token = create_access_token(identity = str(user.id), fresh = True)
            refresh_token = create_refresh_token(identity = str(user.id))
            response = jsonify({"access_token": access_token})
            set_refresh_cookies(response, refresh_token)
            return response
    
        abort(401, description = "Invalid credentials")
        
@blp.route('/refresh')
class TokenRefresh(MethodView):
    @jwt_required(refresh=True)
    def post(self):
        identity = get_jwt_identity()
        access_token = create_access_token(identity=identity)
        return {"access_token": access_token}

@blp.route('/signout')
class Signout(MethodView):
    @jwt_required()
    def post(self):
        jti = get_jwt()["jti"]
        BLOCKLIST.add(jti)
        response = jsonify(msg="Signout successful")
        response.set_cookie('refresh_token_cookie', '', expires=0, httponly=True, secure=True, path='/')
        response.set_cookie('access_token_cookie', '', expires=0, httponly=True, secure=True, path='/')
        return response