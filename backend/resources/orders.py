from flask_smorest import Blueprint
from flask.views import MethodView
from flask_smorest import abort
from models import OrderModel, OrderItemModel
from schemas import OrderSchema, PlainOrderItemSchema
from flask_jwt_extended import jwt_required, get_jwt_identity
from db import db
from sqlalchemy.exc import SQLAlchemyError
from uuid import uuid4
from utils import role_required
from flask import request

blp = Blueprint("orders", __name__, description="Operations on orders")

@blp.route('/orders')
class Orders(MethodView):
    @blp.response(200, OrderSchema(many=True))
    @jwt_required()
    @role_required(["admin", "moderator"])
    def get(self):
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        include_user = request.args.get("include_user", default='false').lower() == 'true'
        include_items = request.args.get("include_items", default='false').lower() == 'true'
        
        query = OrderModel.query
        
        if include_user:
            query = query.options(db.joinedload(OrderModel.user))
        
        if include_items:
            query = query.options(db.joinedload(OrderModel.items))
        
        query = query.offset(page*per_page).limit(per_page)
        
        return OrderModel.query.all()
       
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
    def get(self):
        identity = get_jwt_identity()
        
        include_user = request.args.get("include_user", default='false').lower() == 'true'
        include_items = request.args.get("include_items", default='false').lower() == 'true'
        
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        query = OrderModel.query
        
        query = query.filter_by(user_id=identity)
        
        if include_user:
            query = query.options(db.joinedload(OrderModel.user))
        
        if include_items:
            query = query.options(db.joinedload(OrderModel.items))
            
        query = query.offset(page*per_page).limit(per_page)
            
        orders = query.all()
            
        params = {
            "many": True,
            "include_items": include_items,
            "include_user": include_user
        }
        schema = OrderSchema(**params)
            
        return schema.dump(orders), 200