from flask.views import MethodView
from flask_smorest import Blueprint, abort
import uuid
from models import ItemModel, CategoryModel, TypeModel, FavoriteModel, ItemTranslationModel, ItemDetailsTranslationModel, ItemDetailsModel
from schemas import ItemSchema, ItemUpdateSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask import request, g
from sqlalchemy import func, and_
from flask_jwt_extended import decode_token
from flask_jwt_extended import jwt_required
from utils import role_required
from sqlalchemy.orm import aliased
from constants import SupportedCurrencies
from sqlalchemy.orm import contains_eager
from currency_converter import CurrencyConverter

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
        item = ItemModel.query.get_or_404(item_id)
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
    def get(self):
        auth_header = request.headers.get("Authorization", None)
        language = g.language
            
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        include_type = request.args.get("include_type", default='false').lower() == 'true'
        include_category = request.args.get("include_category", default='false').lower() == 'true'
        include_item_details = request.args.get("include_item_details", default='false').lower() == 'true'
        include_reviews = request.args.get("include_reviews", default='false').lower() == 'true'
        include_images = request.args.get("include_images", default='false').lower() == 'true'
        include_favorite = request.args.get("include_favorite", default='false').lower() == 'true'
        
        include_reviews_user = request.args.get("include_reviews_user", default='false').lower() == 'true'
        
        category_filter = request.args.get("category_name", "").lower()
        type_filter = request.args.get("type_name", "").lower()
        bestseller_filter = request.args.get("bestseller", "").lower()
        secretbox_filter = request.args.get("secretbox", "").lower()
        page_link_filter = request.args.get("page_link", "").lower()
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
        
        if include_type:
            query = query.options(db.joinedload(ItemModel.type))
        if include_category:
            query = query.options(db.joinedload(ItemModel.category))

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
                
        if auth_header and auth_header.startswith('Bearer ') and include_favorite:
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
        
        params = {
            "many": True,
            "include_category": include_category,
            "include_type": include_type,
            "include_item_details": include_item_details,
            "include_reviews": include_reviews,
            "include_images": include_images,
            "include_favorite": include_favorite,
            "include_reviews_user": include_reviews_user
        }
        
        for item in items:
            item.converted_price = CurrencyConverter.convert(item.price, to_currency=SupportedCurrencies[language.value.lower()])
            if item.old_price:
                item.converted_old_price = CurrencyConverter.convert(item.old_price, to_currency=SupportedCurrencies[language.value.lower()])
               
        schema = ItemSchema(**params)
            
        dumped_items = schema.dump(items)
        return dumped_items, 200
        
    @blp.arguments(ItemSchema)
    @blp.response(201, ItemSchema)
    @jwt_required()
    @role_required(['admin', 'moderator'])
    def post(self, item_data):
        item = ItemModel(**item_data, id=str(uuid.uuid4()))
        
        try:
            db.session.add(item)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while inserting the item")
            
        return item