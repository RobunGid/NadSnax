import os
from flask_smorest import Blueprint, abort
from flask import request, send_from_directory
from flask.views import MethodView
from utils import allowed_file

blp = Blueprint("avatars", __name__, description = "Operations on avatars files")
	
@blp.route('/avatar')
class Avatar(MethodView):
	def post(self):
		from app import app
		if 'file' not in request.files:
			abort(400, description="No image")
		avatar_file = request.files['file']
		if avatar_file.filename == '':
			abort(400, description='No selected image')
		if avatar_file and allowed_file(avatar_file.filename):
			filename = os.path.join(app.config['UPLOAD_FOLDER'], avatar_file.filename)
			avatar_file.save(filename)
			return {"message": "Avatar uploaded successfully", "avatar_url": avatar_file.filename}
	def get(self):
		from app import app
		avatars = [f for f in os.listdir(app.config['UPLOAD_FOLDER']) if os.path.isfile(os.path.join(app.config['UPLOAD_FOLDER'], f))]
		return {"avatars": avatars}



@blp.route('/avatar/<string:avatar_url>')
class Avatars(MethodView):
	def get(self, avatar_url):
		from app import app
		return send_from_directory(app.config["UPLOAD_FOLDER"], avatar_url)
	
	def delete(self, avatar_url):
		from app import app
		file_path = os.path.join(app.config['UPLOAD_FOLDER'], avatar_url)
		if os.path.exists(file_path):
			os.remove(file_path)
			return {"message": "Avatar deleted successfully", "avatar_url": file_path}
		else:
			abort(404, description="Avatar not found")