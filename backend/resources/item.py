from flask.views import MethodView
from flask_smorest import Blueprint, abort
import uuid
from models import ItemModel
from schemas import ItemSchema, PlainItemSchema, ItemUpdateSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError

blp = Blueprint("items", __name__, description = "Operations on items")

@blp.route('/item')
class Item(MethodView):
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