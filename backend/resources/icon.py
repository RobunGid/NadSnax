import os
from flask_smorest import Blueprint, abort
from flask import request, send_from_directory
from flask.views import MethodView
from utils import allowed_avatar_file
from models import UserModel
from db import db
from utils import content_type_required
from flask_jwt_extended import jwt_required, get_jwt_identity

blp = Blueprint("icons", __name__, description = "Operations on icons files")

@blp.route('/resources/icons/<string:icon_id>')
class Icon(MethodView):
    def get(self, icon_id):
        from app import app
        as_attachment = request.args.get("as_attachment", type=bool, default=False)
        return send_from_directory(app.config["ICONS_UPLOAD_FOLDER"], icon_id, as_attachment=as_attachment)    