from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import CategoryModel
from schemas import CategorySchema

blp = Blueprint("categories", __name__, description = "Operations on categories")

@blp.route("/category")
class Category(MethodView):
    @blp.response(200, CategorySchema(many = True))
    def get(self):
        return CategoryModel.query.all()