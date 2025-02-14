from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask.views import MethodView
from flask_smorest import Blueprint, abort
import uuid
from models import ItemDetailsModel
from schemas import ItemDetailsSchema

blp = Blueprint("item_details", __name__, description = "Operations on item details")

@blp.route('/item_detail')
class ItemDetails(MethodView):
    @blp.response(200, ItemDetailsSchema(many = True))
    def get(self):
        return ItemDetailsModel.query.all()
    
    @blp.arguments(ItemDetailsSchema)
    @blp.response(201, ItemDetailsSchema)
    def post(self, item_data):
        item_detail = ItemDetailsModel(**item_data, id = str(uuid.uuid4()))
        
        try:
            db.session.add(item_detail)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message = "An error occured while inserting the item details")
            
        return item_detail