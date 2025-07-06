from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import CategoryModel, CategoryTranslationModel, TypeTranslationModel, TypeModel
from schemas import CategorySchema, CategoryUpdateSchema
import uuid
from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask import request, g
from sqlalchemy.orm import aliased, contains_eager
from sqlalchemy import and_

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
    @blp.alt_response(200, description="Categories list")
    @blp.doc(
        description="Get categories list with query parameters to manage related items and types",
        parameters=[
            {
                "name": "include_items",
                "in": "query",
                "type": "boolean",
                "required": False,
                "default": "false",
                "description": "Include related items"
            },
            {
                "name": "include_types",
                "in": "query",
                "type": "boolean",
                "required": False,
                "default": "false",
                "description": "Include types"
            }
        ],
        responses={
            "200": {
                "description": "Categories list",
                "content": {
                    "application/json": {
                        "examples": {
                            "include_items=true&include_types=true": {
                                "value": [
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "page_link": "string",
                                        "items": [{"string": "string"}, {"string": "string"}],
                                        "types": [{"string": "string"}, {"string": "string"}]
                                    },
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "page_link": "string",
                                        "items": [],
                                        "types": []
                                    }
                                ]
                            },
                            "Without query parameters": {
                                "value": [
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "page_link": "string"
                                    }
                                ]
                            },
                            "include_items=true": {
                                "value": [
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "items": [{"string": "string"}, {"string": "string"}],
                                        "page_link": "string"
                                    },
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "items": [],
                                        "page_link": "string"
                                    }
                                ]
                            },
                        }
                    }
                }
            }
        }
    )
    def get(self):
        include_items = request.args.get("include_items", "false").lower() == "true"
        include_types = request.args.get("include_types", "false").lower() == "true"
        language = g.language

        query = CategoryModel.query

        if include_items:
            query = query.options(db.joinedload(CategoryModel.items))

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
                
            if include_types:
                for typee in category.types:
                    if typee.translations:
                        typee.translation = typee.translations[0]
                        typee.name = typee.translation.name

        schema = CategorySchema(many=True, include_types=include_types, include_items=include_items)
            
        return schema.dump(categories), 200
    
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