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
    @blp.response(200, TypeSchema(many=True))
    def get(self):
        query = TypeModel.query
        
        types = query.all()
            
        return types
    
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