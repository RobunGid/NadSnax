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

blp = Blueprint("orders", __name__, description = "Operations on orders")

@blp.route('/orders')
class Orders(MethodView):
    @blp.response(200, OrderSchema(many=True))
    @jwt_required()
    @role_required(["admin", "moderator"])
    def get(self):
        return OrderModel.query.all()
       
    @blp.arguments(PlainOrderItemSchema(many=True))
    @blp.response(201, OrderSchema)
    @jwt_required()
    def post(self, order_data):
        identity = get_jwt_identity()
        print(identity)
        order = OrderModel(id=str(uuid4()), user_id=identity)
        db.session.add(order)
        db.session.commit()
        
        order_items = [OrderItemModel(**order_item, id=str(uuid4()), order_id=order.id) for order_item in order_data]
        db.session.bulk_save_objects(order_items)
        
        db.session.commit()
    
        return OrderModel.query.get(order.id)
    
@blp.route('/orders/<string:order_id>')
@jwt_required()
class Order(MethodView):
    def delete(self, order_id):
        identity = get_jwt_identity()
        order = OrderModel.query.get_or_404(order_id)
        if order.user_id != identity:
            abort(401, message='You can\'t delete this order')
        db.session.delete(order)
        db.session.commit()
        return {"message": "Order deleted"}