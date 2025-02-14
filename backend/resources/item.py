from flask.views import MethodView
from flask_smorest import Blueprint, abort
import uuid
from models import ItemModel
from schemas import ItemSchema, ItemUpdateSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError

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
    @blp.response(200, ItemSchema(many = True))
    def get(self):
        return ItemModel.query.all()
        
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