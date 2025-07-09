from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import ItemDetailsModel
from schemas import ItemDetailsSchema

blp = Blueprint("item_details", __name__, description="Operations on item details")
        
@blp.route("/item_details")
class ItemDetails(MethodView):
    @blp.response(200, ItemDetailsSchema(many = True))
    def get(self):
        return ItemDetailsModel.query.all()
    
    @blp.arguments(ItemDetailsSchema)
    @blp.response(201, ItemDetailsSchema)
    def post(self, item_data):
        item_detail = ItemDetailsModel(**item_data)
        try:
            db.session.add(item_detail)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while inserting the item details")
            
        return item_detail
    
@blp.route('/item_detail/<string:item_id>')
class ItemDetail(MethodView):
    @blp.response(200, ItemDetailsSchema)
    def get(self, item_id):
        item_detail = ItemDetailsModel.query.get_or_404(item_id)
        return item_detail
    
    def delete(self, item_id):
        item_detail = ItemDetailsModel.query.get_or_404(item_id)
        db.session.delete(item_detail)
        db.session.commit()
        return {"message": "Item detail deleted"}
    
    @blp.arguments(ItemDetailsSchema)
    @blp.response(201, ItemDetailsSchema)
    def put(self, item_detail_data, item_id):
        item_detail = ItemDetailsModel.query.get_or_404(item_id)
        
        if item_detail:
            item_detail.full_description = item_detail_data["full_description"]
            item_detail.full_label = item_detail_data["full_label"]
            item_detail.item_id = item_detail_data["item_id"]
            item_detail.ingridients = item_detail_data["ingridients"]
            item_detail.supplier = item_detail_data["supplier"]
            item_detail.supplier_link = item_detail_data["supplier_link"]
            item_detail.nutrition = item_detail_data["nutrition"]
        else:
            item_detail = ItemDetailsModel(**item_detail_data, item_id = item_id)
            
        db.session.add(item_detail)
        db.session.commit()
        
        return item_detail