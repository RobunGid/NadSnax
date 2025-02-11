from flask.views import MethodView
from flask_smorest import Blueprint, abort

blp = Blueprint("items", __name__, description = "Operations on items")