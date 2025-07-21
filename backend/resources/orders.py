from uuid import uuid4

from flask_smorest import Blueprint
from flask.views import MethodView
from flask_smorest import abort
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request, g
from sqlalchemy.orm import aliased, contains_eager
from sqlalchemy import and_

from db import db
from currency_converter import CurrencyConverter
from constants import SupportedCurrencies
from utils import role_required
from schemas import OrderSchema
from models import OrderModel, OrderItemModel, ItemTranslationModel, ItemModel

blp = Blueprint("orders", __name__, description="Operations on orders")

@blp.route('/orders')
class Orders(MethodView):
    @blp.response(200, OrderSchema(many=True))
    @jwt_required()
    @role_required(["admin", "moderator"])
    def get(self):
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        language = g.language
        
        query = OrderModel.query
        
        ItemTranslationAlias = aliased(ItemTranslationModel)

        query = query.join(OrderModel.items)
        query = query.join(OrderItemModel.item)
        query = query.outerjoin(
            ItemTranslationAlias, 
                and_(
                    ItemTranslationAlias.item_id == ItemModel.id,
                    ItemTranslationAlias.lang_key == language
                )
            )
        query = query.options(
                contains_eager(OrderModel.items)
                .contains_eager(OrderItemModel.item)
                .contains_eager(ItemModel.translations, alias=ItemTranslationAlias)
            )
        
        query = query.offset(page*per_page).limit(per_page)
        
        orders = OrderModel.query.all()
        
        for order in orders:
            for order_item in order.items:
                item = order_item.item
                item.converted_price = CurrencyConverter.convert(item.price, to_currency=SupportedCurrencies[language.value.lower()])
                if item.old_price:
                    item.converted_old_price = CurrencyConverter.convert(item.old_price, to_currency=SupportedCurrencies[language.value.lower()])
                if item and item.translations:
                    item.translation = item.translations[0]
                    item.label = item.translation.label or item.label
                    item.description = item.translation.description or item.description
        
        return orders
       
    @blp.arguments(OrderSchema)
    @blp.response(201, OrderSchema)
    @jwt_required()
    def post(self, order_data):
        identity = get_jwt_identity()
        
        order = OrderModel(id=str(uuid4()), user_id=identity, pickup_point=order_data["pickup_point"])
        db.session.add(order)
        db.session.commit()
        
        order_items = [OrderItemModel(**order_item, id=str(uuid4()), order_id=order.id) for order_item in order_data["items"]]
        db.session.bulk_save_objects(order_items)
        
        db.session.commit()
    
        return OrderModel.query.get(order.id)
    
@blp.route('/orders/<string:order_id>')
class Order(MethodView):
    @jwt_required()
    @role_required(["admin", "moderator"])
    def delete(self, order_id):
        identity = get_jwt_identity()
        order = OrderModel.query.get_or_404(order_id)
        if order.user_id != identity:
            abort(401, message='You can\'t delete this order')
        db.session.delete(order)
        db.session.commit()
        return {"message": "Order deleted"}
    
@blp.route('/orders/self')
class SelfOrders(MethodView):
    @jwt_required()
    @blp.response(200, OrderSchema(many=True))
    def get(self):
        identity = get_jwt_identity()
        language = g.language
        
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        query = OrderModel.query
        
        query = query.filter_by(user_id=identity)
        
        ItemTranslationAlias = aliased(ItemTranslationModel)

        query = query.join(OrderModel.items)
        query = query.join(OrderItemModel.item)
        query = query.outerjoin(
            ItemTranslationAlias, 
                and_(
                    ItemTranslationAlias.item_id == ItemModel.id,
                    ItemTranslationAlias.lang_key == language
                )
            )
        query = query.options(
                contains_eager(OrderModel.items)
                .contains_eager(OrderItemModel.item)
                .contains_eager(ItemModel.translations, alias=ItemTranslationAlias)
            )
            
        query = query.offset(page*per_page).limit(per_page)
            
        orders = query.all()
            
        for order in orders:
            for order_item in order.items:
                item = order_item.item
                item.converted_price = CurrencyConverter.convert(item.price, to_currency=SupportedCurrencies[language.value.lower()])
                if item.old_price:
                    item.converted_old_price = CurrencyConverter.convert(item.old_price, to_currency=SupportedCurrencies[language.value.lower()])
                if item and item.translations:
                    item.translation = item.translations[0]
                    item.label = item.translation.label or item.label
                    item.description = item.translation.description or item.description
                    item.converted_price = CurrencyConverter.convert(item.price, to_currency=SupportedCurrencies[language.value.lower()])
                    item.converted_old_price = CurrencyConverter.convert(item.price, to_currency=SupportedCurrencies[language.value.lower()])
        
        return orders