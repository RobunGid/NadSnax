from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import TypeModel
from schemas import TypeSchema, TypeUpdateSchema, ItemSchema
import uuid
from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask import request

blp = Blueprint("types", __name__, description="Operations on types")

@blp.route("/type/<string:type_id>")
class Category(MethodView):
    @blp.response(200, TypeSchema())
    def get(self, type_id):
        type = TypeModel.query.get_or_404(type_id)
        return type
    
    def delete(self, type_id):
        type = TypeModel.query.get_or_404(type_id)
        db.session.delete(type)
        db.session.commit()
        
        return {"message": "Type deleted"}
    
    @blp.response(200, TypeSchema)
    @blp.arguments(TypeUpdateSchema)
    def put(self, type_data, type_id):
        type = TypeModel.query.get(type_id)
        
        if type:
            type.name = type_data["name"]
            type.icon_url = type_data["icon_url"]
            type.category_id = type_data["category_id"]
            type.page_link = type_data["page_link"]
        else:
            type = TypeModel(**type_data, id=type_id)
            
        db.session.add(type)
        db.session.commit()
        
        return type
            

@blp.route("/type")
class Categories(MethodView):
    @blp.alt_response(200, description = "Types list")
    @blp.doc(
        description="Get types list with query parameters to manage related items and category",
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
                "name": "include_category",
                "in": "query",
                "type": "boolean",
                "required": False,
                "default": "false",
                "description": "Include category"
            }
        ],
        responses={
            "200": {
                "description": "Types list",
                "content": {
                    "application/json": {
                        "examples": {
                            "include_items=true&include_category=true": {
                                "value": [
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "page_link": "string",
                                        "items": [{"string": "string"}, {"string": "string"}],
                                        "category_id": "string",
                                        "category": {"string": "string"}
                                    },
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "page_link": "string",
                                        "items": [{"string": "string"}, {"string": "string"}],
                                        "category_id": "ID",
                                        "category": {"string": "string"}
                                    }
                                ]
                            },
                            "Without query parameters": {
                                "value": [
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "page_link": "string",
                                        "category_id": "string",
                                    }
                                ]
                            },
                            "include_items=true": {
                                "value": [
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "category_id": "string",
                                        "page_link": "string",
                                        "items": [{"string": "string"}, {"string": "string"}],
                                    },
                                    {
                                        "id": "string",
                                        "name": "string",
                                        "icon_url": "string",
                                        "category_id": "string",
                                        "page_link": "string",
                                        "items": [],
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
        include_category = request.args.get("include_category", "false").lower() == "true"
        
        query = TypeModel.query
        
        if include_items:
            query = query.options(db.joinedload(TypeModel.items))
        if include_category:
            query = query.options(db.joinedload(TypeModel.category))
            
        types = query.all()
            
        if include_items and include_category:
            schema = TypeSchema(many=True, include_category=True, include_items=True)
        elif include_items:
            schema = TypeSchema(many=True, include_items=True)
        elif include_category:
            schema = TypeSchema(many=True, include_category=True)
        else:
            schema = TypeSchema(many=True)
            
        return schema.dump(types), 200
    
    @blp.arguments(TypeSchema)
    @blp.response(201, TypeSchema)
    def post(self, type_data):
        type = TypeModel(**type_data, id=str(uuid.uuid4()))
        try:
            db.session.add(type)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message = "An error occured while inserting the type")
            
        return type