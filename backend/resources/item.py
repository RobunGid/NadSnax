from flask.views import MethodView
from flask_smorest import Blueprint, abort
import uuid
from models import ItemModel, CategoryModel, TypeModel
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
			item.price = item_data["price"]
			item.old_price = item_data["old_price"]
			item.is_bestseller = item_data["is_bestseller"]
			item.is_secretbox = item_data["is_secretbox"]
			item.category_id = item_data["category_id"]
			item.type_id = item_data["type_id"]
		else:
			item = ItemModel(**item_data, id = item_id)
                    
		db.session.add(item)
		db.session.commit()
        
		return item

@blp.route('/item')
class Items(MethodView):
    def get(self):
        include_type = request.args.get("include_type", type = bool, default = False)
        include_category = request.args.get("include_category", type = bool, default = False)
        include_item_details = request.args.get("include_item_details", type = bool, default = False)
        include_reviews = request.args.get("include_reviews", type = bool, default = False)
        include_images = request.args.get("include_images", type = bool, default = False)
        
        category_filter = request.args.get("category_name", "").lower()
        type_filter = request.args.get("type_name", "").lower()
        bestseller_filter = request.args.get("bestseller", "").lower()
        secretbox_filter = request.args.get("secretbox", "").lower()
        page_link_filter = request.args.get("page_link", "").lower()
        simillar_id_filter = request.args.get("simillar_id")
        
        if bestseller_filter in ["false", "true"]:
            bestseller_filter = bestseller_filter == "true"
        else:
            bestseller_filter = None
            
        if secretbox_filter in ["false", "true"]:
            secretbox_filter = secretbox_filter == "true"
        else:
            secretbox_filter = None
        
        query = ItemModel.query
        
        if include_type:
            query = query.options(db.joinedload(ItemModel.type))
        if include_category:
            query = query.options(db.joinedload(ItemModel.category))
        if include_item_details:
            query = query.options(db.joinedload(ItemModel.item_details))
        if include_reviews:
            query = query.options(db.joinedload(ItemModel.reviews))
        if include_images:
            query = query.options(db.joinedload(ItemModel.images))
            
        query = query.join(ItemModel.category) if category_filter else query
        query = query.join(ItemModel.type) if type_filter else query
            
        query = query.filter(func.lower(CategoryModel.name) == category_filter) if category_filter else query
        query = query.filter(func.lower(TypeModel.name) == type_filter) if type_filter else query
        query = query.filter(ItemModel.page_link == page_link_filter) if page_link_filter else query
        
        query = query.filter(ItemModel.is_bestseller == bestseller_filter) if bestseller_filter != None else query
        query = query.filter(ItemModel.is_secretbox == secretbox_filter) if secretbox_filter != None else query
        
        if simillar_id_filter:
            simillar_item = ItemModel.query.get_or_404(simillar_id_filter)
            
            query = query.filter(ItemModel.category_id == simillar_item.category_id)
            query = query.filter(ItemModel.price >= simillar_item.price * 0.9)
            query = query.filter(ItemModel.price <= simillar_item.price * 1.1)
        
        items = query.all()
        
        params = {
			"many": True,
    		"include_category": include_category,
    		"include_type": include_type,
    		"include_item_details": include_item_details,
			"include_reviews": include_reviews,
			"include_images": include_images
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