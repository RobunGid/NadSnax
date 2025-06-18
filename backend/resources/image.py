from flask_smorest import Blueprint
from flask.views import MethodView
from flask import send_from_directory, abort
import os

blp = Blueprint("images", __name__, description="Operations on images")

@blp.route('/resources/images/<string:image_name>')
class Images(MethodView):
    def get(self, image_name):
        from app import app
        return send_from_directory(app.config["IMAGE_UPLOAD_FOLDER"], image_name)
