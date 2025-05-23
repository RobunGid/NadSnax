from flask_smorest import Blueprint
from flask.views import MethodView
from flask_smorest import abort
from models import OrderModel
from schemas import OrderSchema, PlainOrderSchema
from flask_jwt_extended import jwt_required, get_jwt_identity
from db import db
from sqlalchemy.exc import SQLAlchemyError
from uuid import uuid4
from utils import role_required

blp = Blueprint("orders", __name__, description = "Operations on orders")

@blp.route('/orders')
class Reviews(MethodView):
    @blp.response(200, OrderSchema(many=True))
    @jwt_required()
    @role_required(["admin", "moderator"])
    def get(self):
        return OrderModel.query.all()
       
    @blp.arguments(PlainOrderSchema(many=True))
    @blp.response(201, OrderSchema(many=True))
    @jwt_required()
    def post(self, order_data):
        identity = get_jwt_identity()
        print(identity)
        orders = [OrderModel(**order, id=str(uuid4()), user_id=identity) for order in order_data]
  
        try:
            db.session.bulk_save_objects(orders)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while creating the order")
    
        return OrderModel.query.filter(OrderModel.id.in_([order.id for order in orders])).all()