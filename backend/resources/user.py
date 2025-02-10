from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import UserModel
from schemas import UserSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
import uuid

blp = Blueprint("users", __name__, description = "Operations on users")

@blp.route('/user/<string:user_id>')
class User(MethodView):
    @blp.response(200, UserSchema)
    def get(self, user_id):
        user = UserModel.query.get_or_404(user_id)
        return user

@blp.route('/user')
class Items(MethodView):
	@blp.response(200, UserSchema(many = True))
	def get(self):
		return UserModel.query.all()
	
       
	@blp.arguments(UserSchema)
	@blp.response(201, UserSchema)    
	def post(self, item_data):
		user = UserModel(**item_data, id = str(uuid.uuid4()))
		try:
			db.session.add(user)
			db.session.commit()
		except SQLAlchemyError:
			abort(500, message = "An error occured while inserting the user")
    
		return user