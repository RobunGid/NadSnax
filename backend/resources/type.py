from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import TypeModel
from schemas import TypeSchema

blp = Blueprint("types", __name__, description = "Operations on types")

@blp.route("/type")
class Category(MethodView):
    @blp.response(200, TypeSchema(many = True))
    def get(self):
        return TypeModel.query.all()