from flask_smorest import Blueprint, abort
from db import db
import uuid
from flask.views import MethodView
from schemas import ImageSchema
from models import ImageModel, ItemModel
from sqlalchemy.exc import SQLAlchemyError

blp = Blueprint("images", __name__, description = "Operations on images")

@blp.route('/image')
class Image(MethodView):
    @blp.arguments(ImageSchema)
    @blp.response(201, ImageSchema)
    def post(self, image_data):
        image = ImageModel(**image_data, id = str(uuid.uuid4()))
        
        try:
            db.session.add(image)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message = "An error occured while inserting the image")
            
        return image
    
    @blp.response(200, ImageSchema(many = True))
    def get(self):
        return ImageModel.query.all()