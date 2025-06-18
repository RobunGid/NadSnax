from flask_smorest import Blueprint, abort
from db import db
import uuid
from flask.views import MethodView
from schemas import ItemImageSchema
from models import ItemImageModel, ItemModel
from sqlalchemy.exc import SQLAlchemyError
from flask_jwt_extended import jwt_required
from utils import role_required

blp = Blueprint("item_images", __name__, description="Operations on item images")

@blp.route('/item_image')

class Images(MethodView):
    @blp.arguments(ItemImageSchema)
    @blp.response(201, ItemImageSchema)
    @jwt_required()
    @role_required(["admin", "moderator"])
    def post(self, image_data):
        image = ItemImageModel(**image_data, id=str(uuid.uuid4()))
        
        try:
            db.session.add(image)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while inserting the record about image")
            
        return image
    
    @blp.response(200, ItemImageSchema(many=True))
    def get(self):
        return ItemImageModel.query.all()
    
@blp.route('/item_image/<string:item_image_id>')
class Image(MethodView):
    @jwt_required()
    @role_required(["admin", "moderator"])
    def delete(self, item_image_id):
        item_image = ItemImageModel.query.get_or_404(item_image_id)
        db.session.delete(item_image)
        db.session.commit()
        
        return {"message": "Item image deleted"}