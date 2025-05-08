import os
from flask_smorest import Blueprint, abort
from flask import request, send_from_directory
from flask.views import MethodView
from utils import allowed_file
from models import UserModel
from db import db

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