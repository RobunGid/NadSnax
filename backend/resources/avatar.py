import os
from flask_smorest import Blueprint, abort
from flask import request, send_from_directory
from flask.views import MethodView
from utils import allowed_avatar_file
from models import UserModel
from db import db
from utils import content_type_required
from flask_jwt_extended import jwt_required, get_jwt_identity

blp = Blueprint("avatars", __name__, description = "Operations on avatars files")
	
@blp.route('/avatar')
class Avatar(MethodView):
	def get(self):
		from app import app
		avatars = [f for f in os.listdir(app.config['AVATAR_UPLOAD_FOLDER']) if os.path.isfile(os.path.join(app.config['AVATAR_UPLOAD_FOLDER'], f))]
		return {"avatars": avatars}



@blp.route('/avatar/<string:avatar_name>')
class Avatars(MethodView):
	def get(self, avatar_name):
		from app import app
		as_attachment = request.args.get("as_attachment", type = bool, default = False)
		return send_from_directory(app.config["AVATAR_UPLOAD_FOLDER"], avatar_name, as_attachment=as_attachment)     
	
	def delete(self, avatar_name):
		from app import app
		file_path = os.path.join(app.config['AVATAR_UPLOAD_FOLDER'], avatar_name)
		if os.path.exists(file_path):
			os.remove(file_path)
			return {"message": "Avatar deleted successfully", "avatar_name": file_path}
		else:
			abort(404, description="Avatar not found")
			
@blp.route('/avatar/me')
class AvatarMe(MethodView):
	@content_type_required(['multipart/form-data'])
	@jwt_required()
	def put(self):
		from app import app
		identity = get_jwt_identity()
		user = UserModel.query.get_or_404(identity)
		avatar_name = user.username + '.png'
		file_path = os.path.join(app.config['AVATAR_UPLOAD_FOLDER'], avatar_name)
		
		if 'avatar' not in request.files:
			abort(400, description="No avatar file found")
		
		avatar_file = request.files.get('avatar')

		if not allowed_avatar_file(avatar_file):
			abort(400, message="Invalid avatar file format or file size")
			
		if os.path.exists(file_path):
			os.remove(file_path)

		filename = os.path.join(app.config['AVATAR_UPLOAD_FOLDER'], avatar_name)
		
		avatar_file.save(filename)
		
		return {"message": "Avatar changed successfully", "avatar_name": file_path}