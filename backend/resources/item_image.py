from flask_smorest import Blueprint, abort
from db import db
import uuid
from flask.views import MethodView
from schemas import ItemImageSchema
from models import ItemImageModel, ItemModel
from sqlalchemy.exc import SQLAlchemyError
from flask_jwt_extended import jwt_required
from utils import role_required, allowed_item_image_file, content_type_required
import os
from flask import request

blp = Blueprint("item_images", __name__, description="Operations on item images")

@blp.route('/item_image')

class Images(MethodView):
    @jwt_required()
    @content_type_required(['multipart/form-data'])
    @role_required(["admin", "moderator"])
    @blp.arguments(ItemImageSchema, location="form")
    @blp.response(201, ItemImageSchema)
    def post(self, image_data):
        from app import app
        image = ItemImageModel(**image_data, id=str(uuid.uuid4()))
        item_image_name = request.form.get("name") + '.png'
        file_path = os.path.join(app.config['AVATAR_UPLOAD_FOLDER'], item_image_name)
        
        if 'image' not in request.files:
            abort(400, message="No item image file found")
            
        image_file = request.files.get("image")
        
        if not allowed_item_image_file(image_file):
            abort(400, message="Invalid avatar file format or file size")
            
        if os.path.exists(file_path):
            abort(400, message="Image already exists")
        
        filename = os.path.join(app.config['IMAGE_UPLOAD_FOLDER'], item_image_name)
        
        image_file.save(filename)
        
        try:
            db.session.add(image)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while inserting the record about image")
            
        return image
    
    @blp.response(200, ItemImageSchema(many=True))
    def get(self):
        item_filter = request.args.get('item_id')
        query = ItemImageModel.query
        
        if item_filter:
            query = query.filter(ItemImageModel.item_id==item_filter)
            
        return query.all()
    
@blp.route('/item_image/<string:item_image_id>')
class Image(MethodView):
    @jwt_required()
    @role_required(["admin", "moderator"])
    def delete(self, item_image_id):
        item_image = ItemImageModel.query.get_or_404(item_image_id)
        db.session.delete(item_image)
        db.session.commit()
        
        return {"message": "Item image deleted"}