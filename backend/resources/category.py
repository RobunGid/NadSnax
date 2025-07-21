import uuid

from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import SQLAlchemyError
from flask import g
from sqlalchemy.orm import aliased, contains_eager
from sqlalchemy import and_

from db import db
from models import CategoryModel, CategoryTranslationModel, TypeTranslationModel, TypeModel
from schemas import CategorySchema, CategoryUpdateSchema

blp = Blueprint("categories", __name__, description="Operations on categories")

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
            category.page_link = category_data["page_link"]
        else:
            category = CategoryModel(**category_data, id=category_id)
            
        db.session.add(category)
        db.session.commit()
        
        return category
            

@blp.route("/category")
class Categories(MethodView):
    @blp.response(200, CategorySchema(many=True, exclude=("items","types.category", "types.items")))
    def get(self):
        language = g.language

        query = CategoryModel.query

        CategoryTranslationAlias = aliased(CategoryTranslationModel)
        TypeTranslationAlias = aliased(TypeTranslationModel)

        query = query \
            .outerjoin(CategoryTranslationAlias, 
                    and_(CategoryTranslationAlias.category_id == CategoryModel.id, 
                            CategoryTranslationAlias.lang_key == language)) \
            .outerjoin(TypeModel, CategoryModel.id == TypeModel.category_id) \
            .outerjoin(TypeTranslationAlias,
                    and_(TypeTranslationAlias.type_id == TypeModel.id,
                            TypeTranslationAlias.lang_key == language)) \
            .options(contains_eager(CategoryModel.translations, alias=CategoryTranslationAlias)) \
            .options(contains_eager(CategoryModel.types)
                    .contains_eager(TypeModel.translations, alias=TypeTranslationAlias))
            
        categories = query.all()
        
        for category in categories:
            if category.translations:
                category.translation = category.translations[0]
                category.name = category.translation.name or category.name
                
            for typee in category.types:
                if typee.translations:
                    typee.translation = typee.translations[0]
                    typee.name = typee.translation.name

        return categories
    
    @blp.arguments(CategorySchema)
    @blp.response(201, CategorySchema)
    def post(self, category_data):
        category = CategoryModel(**category_data, id =str(uuid.uuid4()))
        try:
            db.session.add(category)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while inserting the category")
            
        return category