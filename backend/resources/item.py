from flask.views import MethodView
from flask_smorest import Blueprint, abort
import uuid
from models import ItemModel, CategoryModel, TypeModel, ReviewModel
from schemas import ItemSchema, ItemUpdateSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask import request
from sqlalchemy import func

blp = Blueprint("items", __name__, description = "Operations on items")

@blp.route('/item/<string:item_id>')
class Item(MethodView):
	@blp.response(200, ItemSchema)
	def get(self, item_id):
		item = ItemModel.query.get_or_404(item_id)
		return item

	def delete(self, item_id):
		item = ItemModel.query.get_or_404(item_id)
		db.session.delete(item)
		db.session.commit()
		return {"message": "Item deleted"}

	@blp.response(200, ItemSchema)
	@blp.arguments(ItemUpdateSchema)
	def put(self, item_data, item_id):
		item = ItemModel.query.get(item_id)
  
		if item:
			item.label = item_data["label"]
			item.page_link = item_data["page_link"]
			item.description = item_data["description"]
			item.image_url = item_data["image_url"]
			item.price = item_data["price"]
			item.old_price = item_data["old_price"]
			item.is_bestseller = item_data["is_bestseller"]
			item.category_id = item_data["category_id"]
			item.type_id = item_data["type_id"]
		else:
			item = ItemModel(**item_data, id = item_id)
                    
		db.session.add(item)
		db.session.commit()
        
		return item

@blp.route('/item')
class Items(MethodView):
    @blp.alt_response(200, description = "Items list")
    @blp.doc(
        description="Get items list with query parameters to manage related type, category and item details",
        parameters=[
            {
                "name": "include_type",
                "in": "query",
                "type": "boolean",
                "required": False,
                "default": "false",
                "description": "Include related item type"
            },
            {
                "name": "include_category",
                "in": "query",
                "type": "boolean",
                "required": False,
                "default": "false",
                "description": "Include related item category"
            },
            {
                "name": "include_item_details",
                "in": "query",
                "type": "boolean",
                "required": False,
                "default": "false",
                "description": "Include related item details"
            },
            {
				"name": "include_reviews",
                "in": "query",
                "type": "boolean",
                "required": False,
                "default": "false",
                "description": "Include related item reviews"
            },
            {
                "name": "category_name",
                "in": "query",
                "type": "string",
                "required": False,
                "default": "",
                "description": "Filter by category name"
            },
            {
                "name": "type_name",
                "in": "query",
                "type": "string",
                "required": False,
                "default": "",
                "description": "Filter by type name"
            },
        ],
        responses={
            "200": {
                "description": "Items list",
                "content": {
                    "application/json": {
                        "examples": {
                            "include_type=true&include_category=true&include_item_details=true": {
                                "value": [
                                    {
                                        "id": "string",
                                        "label": "string",
                                        "image_url": "string",
                                        "page_link": "string",
                                        "category_id": "string",
                                        "description": "string",
                                        "is_bestseller": "boolean",
                                        "old_price": "float",
                                        "price": "float",
                                        "type_id": "string",
                                        "category": {
					                        "id": "string",
                    	                    "name": "string",
                        	                "icon_url": "string",
                                	        "page_link": "string"
										},
                                        "type": {
											"category_id": "string",
											"icon_url": "string",
											"id": "string",
											"name": "string",
											"page_link": "string"
										},
                                        "item_details": {
											"full_description": "string",
											"full_label": "string",
											"ingridients": "string",
											"item_id": "string",
											"nutrition": "string",
											"supplier": "string"
										}
                                    }
                                ]
                            },
                            "Without query parameters": {
                                "value": [
{
                                        "id": "string",
                                        "label": "string",
                                        "image_url": "string",
                                        "page_link": "string",
                                        "category_id": "string",
                                        "description": "string",
                                        "is_bestseller": "boolean",
                                        "old_price": "float",
                                        "price": "float",
                                        "type_id": "string",
                                        "average_rating": "float",
                                        "rating_count": "integer"
                                    }
                                ]
                            },
                            "include_type=true": {
                                "value": [
                                    {
                                        "id": "string",
                                        "label": "string",
                                        "image_url": "string",
                                        "page_link": "string",
                                        "category_id": "string",
                                        "description": "string",
                                        "is_bestseller": "boolean",
                                        "old_price": "float",
                                        "price": "float",
                                        "type_id": "string",
                                        "average_rating": "float",
                                        "rating_count": "integer",
                                        "type": {
											"category_id": "string",
											"icon_url": "string",
											"id": "string",
											"name": "string",
											"page_link": "string"
										}
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
        include_type = request.args.get("include_type", type = bool, default = False)
        include_category = request.args.get("include_category", type = bool, default = False)
        include_item_details = request.args.get("include_item_details", type = bool, default = False)
        include_reviews = request.args.get("include_reviews", type = bool, default = False)
        
        category_filter = request.args.get("category_name", "").lower()
        type_filter = request.args.get("type_name", "").lower()
        
        query = ItemModel.query
        
        if include_type:
            query = query.options(db.joinedload(ItemModel.type))
        if include_category:
            query = query.options(db.joinedload(ItemModel.category))
        if include_item_details:
            query = query.options(db.joinedload(ItemModel.item_details))
        if include_reviews:
            query = query.options(db.joinedload(ItemModel.reviews))
            
        query = query.join(ItemModel.category) if category_filter else query
        query = query.join(ItemModel.type) if type_filter else query
            
        query = query.filter(func.lower(CategoryModel.name) == category_filter) if category_filter else query
        query = query.filter(func.lower(TypeModel.name) == type_filter) if type_filter else query
            
        items = query.all()
        
        params = {
			"many": True,
    		"include_category": include_category,
    		"include_type": include_type,
    		"include_item_details": include_item_details,
			"include_reviews": include_reviews
		}
        
        schema = ItemSchema(**params)
            
        return schema.dump(items), 200
        
    @blp.arguments(ItemSchema)
    @blp.response(201, ItemSchema)
    def post(self, item_data):
        item = ItemModel(**item_data, id = str(uuid.uuid4()))
        
        try:
            db.session.add(item)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message = "An error occured while inserting the item")
            
        return item