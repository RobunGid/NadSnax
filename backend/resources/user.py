from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import UserModel
from schemas import UserSchema, UserUpdateSchema, PlainUserSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
import uuid
from flask_jwt_extended import create_access_token
from flask_jwt_extended import create_refresh_token
from flask import request
from passlib.hash import pbkdf2_sha512

blp = Blueprint("users", __name__, description = "Operations on users")

@blp.route('/user/<string:user_id>')
class User(MethodView):
	@blp.response(200, UserSchema)
	def get(self, user_id):
		user = UserModel.query.get_or_404(user_id)
		return user
    
	def delete(self, user_id):
		user = UserModel.query.get_or_404(user_id)
		db.session.delete(user)
		db.session.commit()
		return {"message": "User deleted", "code": 202}

	@blp.response(200, UserSchema)        
	@blp.arguments(UserUpdateSchema)
	def put(self, user_data, user_id):
		user = UserModel.query.get(user_id)
        
		if user:
			user.username = user_data["username"]
			user.avatar_url = user_data["avatar_url"]
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
	def get(self):
		return UserModel.query.all()
	
       
@blp.route('/register')
class UserRegister(MethodView):
	@blp.arguments(UserSchema)
	@blp.response(201, UserSchema)    
	def post(self, user_data):
		user = UserModel(
      id = str(uuid.uuid4()),
      username=user_data["username"], 
      password=pbkdf2_sha512.hash(user_data["password"]), 
      avatar_url=user_data["avatar_url"],
      first_name=user_data["first_name"],
      last_name=user_data["last_name"],
      role=user_data["role"],
      )
		try:
			db.session.add(user)
			db.session.commit()
		except SQLAlchemyError:
			abort(500, message = "An error occured while inserting the user")
    
		return user


@blp.route('/login')
class UserLogin(MethodView):
    @blp.arguments(PlainUserSchema)
    def post(self, user_data):
        user = UserModel.query.filter(
			UserModel.username == user_data["username"]
		).first()
        
        if user and pbkdf2_sha512.verify(user_data["password"], user.password):
            access_token = create_access_token(identity = str(user.id), fresh = True)
            refresh_token = create_refresh_token(identity = str(user.id))
            return {"access_token": access_token, "refresh_token": refresh_token}
    
        abort(401, description = "Invalid credentials")