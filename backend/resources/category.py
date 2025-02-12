from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import CategoryModel
from schemas import CategorySchema, CategoryUpdateSchema
import uuid
from db import db
from sqlalchemy.exc import SQLAlchemyError

blp = Blueprint("categories", __name__, description = "Operations on categories")

@blp.route("/category/<string:category_id>")
class Category(MethodView):
    @blp.response(200, CategorySchema())
    def get(self, category_id):
        category = CategoryModel.query.get_or_404(category_id)
        return category
    
    def delete(self, category_id):
        category = CategoryModel.query.get_or_404(category_id)
        db.session.delete(category)
        db.session.commit()
        
        return {"message": "Category deleted"}
    
    @blp.response(200, CategorySchema)
    @blp.arguments(CategoryUpdateSchema)
    def put(self, category_data, category_id):
        category = CategoryModel.query.get(category_id)
        
        if category:
            category.name = category_data["name"]
            category.icon_url = category_data["icon_url"]
        else:
            category = CategoryModel(**category_data, id = category_id)
            
        db.session.add(category)
        db.session.commit()
        
        return category
            

@blp.route("/category")
class Categories(MethodView):
    @blp.response(200, CategorySchema(many = True))
    def get(self):
        return CategoryModel.query.all()
    
    @blp.arguments(CategorySchema)
    @blp.response(201, CategorySchema)
    def post(self, category_data):
        category = CategoryModel(**category_data, id = str(uuid.uuid4()))
        try:
            db.session.add(category)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message = "An error occured while inserting the category")
            
        return category