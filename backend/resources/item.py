from flask.views import MethodView
from flask_smorest import Blueprint, abort
from marshmallow import ValidationError
from uuid import uuid4
from models import ItemModel, CategoryModel, TypeModel, FavoriteModel, ItemTranslationModel, ItemDetailsTranslationModel, ItemDetailsModel, ItemImageModel, ItemImageTranslationModel
from schemas import ItemSchema, ItemUpdateSchema, PostItemSchema, ItemDetailsSchema, ItemTranslationSchema, ItemImageSchema, ItemDetailsTranslationSchema, ItemImageTranslationSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask import request, g
from sqlalchemy import func, and_
from flask_jwt_extended import decode_token
from flask_jwt_extended import jwt_required
from utils import role_required, content_type_required, allowed_item_image_file
from sqlalchemy.orm import aliased
from constants import SupportedCurrencies
from sqlalchemy.orm import contains_eager
from currency_converter import CurrencyConverter
import json
import os

blp = Blueprint("items", __name__, description = "Operations on items")

@blp.route('/item/<string:item_id>')
class Item(MethodView):
    @blp.response(200, ItemSchema)
    def get(self, item_id):
        item = ItemModel.query.get_or_404(item_id)
        return item
    
    @jwt_required()
    @role_required(['admin', 'moderator'])
    def delete(self, item_id):
        from app import app
        item = ItemModel.query.get_or_404(item_id)
        for image in item.images:
            file_path = os.path.join(app.config['IMAGE_UPLOAD_FOLDER'], image.file_name + '.png')
            if os.path.exists(file_path):
                os.remove(file_path)
        db.session.delete(item)
        db.session.commit()
        return {"message": "Item deleted"}

    @blp.response(200, ItemSchema)
    @jwt_required()
    @role_required(['admin', 'moderator'])
    def patch(self, item_id):
        try:
            item = ItemModel.query.get_or_404(item_id)
            item_data = request.get_json()
            
            if label := item_data.get("label", None):
                item.label = label
            if price := item_data.get("price", None):
                item.price = price
            if description := item_data.get("description", None):
                item.description = description
            if category_id := item_data.get("category_id", None):
                item.category_id = category_id
            if type_id := item_data.get("type_id", None):
                item.type_id = type_id
            if page_link := item_data.get("page_link", None):
                item.page_link = page_link
            if is_secretbox := item_data.get("is_secretbox", None):
                item.is_secretbox = is_secretbox
            if is_bestseller := item_data.get("is_bestseller", None):
                item.is_bestseller = is_bestseller
            if old_price := item_data.get("description", None):
                item.old_price = old_price
        
            db.session.add(item)
            db.session.commit()
        except ValueError as error:
            abort(400, message=str(error))

        return item

    @blp.response(200, ItemSchema)
    @blp.arguments(ItemUpdateSchema)
    @jwt_required()
    @role_required(['admin', 'moderator'])
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
    @blp.response(200, ItemSchema(many=True))
    def get(self):
        auth_header = request.headers.get("Authorization", None)
        language = g.language
            
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        category_filter = request.args.get("category_name", "").lower()
        type_filter = request.args.get("type_name", "").lower()
        bestseller_filter = request.args.get("bestseller", "").lower()
        secretbox_filter = request.args.get("secretbox", "").lower()
        name_filter = request.args.get("name", "").lower()
        simillar_id_filter = request.args.get("simillar_id")
        item_ids = request.args.get('item_ids')
  
        if bestseller_filter in ["false", "true"]:
            bestseller_filter = bestseller_filter == "true"
        else:
            bestseller_filter = None
            
        if secretbox_filter in ["false", "true"]:
            secretbox_filter = secretbox_filter == "true"
        else:
            secretbox_filter = None
            
        query = ItemModel.query
            
        if category_filter:
            query = query.join(CategoryModel).filter(func.lower(CategoryModel.name) == category_filter)

        if type_filter:
            query = query.join(TypeModel).filter(func.lower(TypeModel.name) == type_filter)
            
        query = query.filter(func.lower(CategoryModel.name) == category_filter) if category_filter else query
        query = query.filter(func.lower(TypeModel.name) == type_filter) if type_filter else query
        query = query.filter(ItemModel.name == name_filter) if name_filter else query
        
        query = query.filter(ItemModel.is_bestseller == bestseller_filter) if bestseller_filter != None else query
        query = query.filter(ItemModel.is_secretbox == secretbox_filter) if secretbox_filter != None else query
        
        if simillar_id_filter:
            simillar_item = ItemModel.query.get_or_404(simillar_id_filter)
            
            query = query.filter(ItemModel.category_id == simillar_item.category_id)
            query = query.filter(ItemModel.price >= float(simillar_item.price) * 0.9)
            query = query.filter(ItemModel.price <= float(simillar_item.price) * 1.1)

        if item_ids:
            query = query.filter(ItemModel.id.in_(item_ids.split(',')))
            
        ItemTranslationAlias = aliased(ItemTranslationModel)
        ItemDetailsTranslationAlias = aliased(ItemDetailsTranslationModel)

        query = query.outerjoin(ItemTranslationAlias, 
                    and_(ItemTranslationAlias.item_id == ItemModel.id, 
                            ItemTranslationAlias.lang_key == language))
        query = query.outerjoin(ItemDetailsModel, ItemModel.id == ItemDetailsModel.item_id)
        query = query.outerjoin(ItemDetailsTranslationAlias,
                    and_(ItemDetailsTranslationAlias.item_id == ItemDetailsModel.item_id,
                            ItemDetailsTranslationAlias.lang_key == language)) 
        query = query.options(contains_eager(ItemModel.translations, alias=ItemTranslationAlias)) 
        query = query.options(contains_eager(ItemModel.item_details)
                    .contains_eager(ItemDetailsModel.translations, alias=ItemDetailsTranslationAlias))
                
        if auth_header and auth_header.startswith('Bearer '):
            token = auth_header[7:]
            decoded_token = decode_token(token)
            identity = decoded_token["sub"]
            query = query.join(FavoriteModel, and_(ItemModel.id==FavoriteModel.item_id, FavoriteModel.user_id==identity), isouter=True)
            query = query.add_columns(FavoriteModel.id.label("favorite_id"))
            query = query.offset(page*per_page).limit(per_page)
            items = []
            items_favorites = query.all()
            
            for item, favorite_id in items_favorites:
                item.favorite_id = favorite_id
                items.append(item)
        else:
            query = query.offset(page*per_page).limit(per_page)
            items = query.all()
        
        for item in items:
            item.converted_price = CurrencyConverter.convert(item.price, to_currency=SupportedCurrencies[language.value.lower()])
            if item.old_price:
                item.converted_old_price = CurrencyConverter.convert(item.old_price, to_currency=SupportedCurrencies[language.value.lower()])
               
        for item in items:
            if item.translations:
                item.translation = item.translations[0]
                item.label = item.translation.label or item.label
                item.description = item.translation.description or item.description

            if item.item_details:
                translations = item.item_details.translations
                if translations:
                    item.item_details.translation = translations[0]
                    item.item_details.full_label = item.item_details.translation.full_label or item.item_details.full_label
                    item.item_details.ingridients = item.item_details.translation.ingridients or item.item_details.ingridients
                    item.item_details.nutrition = item.item_details.translation.nutrition or item.item_details.nutrition
                    item.item_details.full_description = item.item_details.translation.full_description or item.item_details.full_description
        return items
        
    @jwt_required()
    @role_required(['admin', 'moderator'])
    @content_type_required(['multipart/form-data'])
    @blp.arguments(PostItemSchema, location="form")
    @blp.response(201, ItemSchema(exclude=("reviews",)))
    def post(self, form_data):
        from app import app
        image_files = request.files.getlist("image_file")
        
        item_json = form_data.get("item", None)
        item_details_json = form_data.get("item_details", None)
        item_images_json = form_data.get("item_images", None)
        item_translations_json = form_data.get("item_translations", None)
        item_details_translations_json = form_data.get("item_details_translations", None)
        item_images_translations_json = form_data.get("item_images_translations", None)
        
        item_data = json.loads(item_json)
        item_details_data = json.loads(item_details_json) if item_details_json else None
        item_images_data = json.loads(item_images_json) if item_images_json else None
        item_translations_data = json.loads(item_translations_json) if item_translations_json else None
        item_details_translations_data = json.loads(item_details_translations_json) if item_details_translations_json else None
        item_images_translations_data = json.loads(item_images_translations_json) if item_images_translations_json else None
        
        if not image_files or len(image_files) != len(item_images_data) or len(image_files) == 0:
            abort(422, message="Wrong image files quantity")

        item = ItemSchema().load(item_data)
        item_translations = ItemTranslationSchema(many=True, exclude=("item_id",)).load(item_translations_data) if item_translations_data else None
        item_details = ItemDetailsSchema(exclude=("item_id",)).load(item_details_data) if item_details_data else None
        item_details_translations = ItemDetailsTranslationSchema(many=True, exclude=("item_id",)).load(item_details_translations_data) if item_details_translations_data else None
        item_images = ItemImageSchema(many=True, exclude=("item_id",)).load(item_images_data) if item_images_data else None
        item_images_translations = [ItemImageTranslationSchema(many=True, exclude=("item_image_id",)).load(item_image_translations_data) 
                                    for item_image_translations_data in item_images_translations_data] if item_images_data else None
        
        item_model = ItemModel(**item, id=str(uuid4()))
        db.session.add(item_model)
        
        if item_details:
            item_details_model = ItemDetailsModel(**item_details_data, item_id=item_model.id)
            db.session.add(item_details_model)
            
        if item_translations:
            item_translations_models = [ItemTranslationModel(**item_translation_data, item_id=item_model.id, id=str(uuid4())) for item_translation_data in item_translations_data]
            db.session.add_all(item_translations_models)
            
        if item_details_translations:
            item_details_translations_model = [ItemDetailsTranslationModel(**item_details_translation_data, item_id=item_model.id, id=str(uuid4())) for item_details_translation_data in item_details_translations_data]
            db.session.add_all(item_details_translations_model)
            
        if item_images:
            item_images_models = [ItemImageModel(**item_image_data, item_id=item_model.id, id=str(uuid4())) for item_image_data in item_images]
            db.session.add_all(item_images_models)
            for item_image, image_file in zip(item_images_models, image_files):
                
                if not allowed_item_image_file(image_file):
                    abort(400, message="Invalid image file format or file size")
                    
                file_path = os.path.join(app.config['IMAGE_UPLOAD_FOLDER'], item_image.name + '.png')
                
                if os.path.exists(file_path):
                    abort(400, message="Image already exists")
                    
                image_file.save(file_path)
            
        db.session.flush()
        if item_images_translations:
            for index, image in enumerate(item_images_models):
                item_images_translation_models = [ItemImageTranslationModel(**item_image_translation, item_image_id=image.id, id=uuid4()) for item_image_translation in item_images_translations[index]]
                db.session.add_all(item_images_translation_models)
        
        
        db.session.commit()
        
        return item_model
  