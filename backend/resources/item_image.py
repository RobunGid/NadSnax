from flask_smorest import Blueprint, abort
from db import db
import uuid
from flask.views import MethodView
from schemas import ItemImageSchema
from models import ItemImageModel, ItemModel
from sqlalchemy.exc import SQLAlchemyError

blp = Blueprint("item_images", __name__, description = "Operations on item images")

@blp.route('/item_image')
class Image(MethodView):
    @blp.arguments(ItemImageSchema)
    @blp.response(201, ItemImageSchema)
    def post(self, image_data):
        image = ItemImageModel(**image_data, id = str(uuid.uuid4()))
        
        try:
            db.session.add(image)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message = "An error occured while inserting the record about image")
            
        return image
    
    @blp.response(200, ItemImageSchema(many = True))
    def get(self):
        return ItemImageModel.query.all()