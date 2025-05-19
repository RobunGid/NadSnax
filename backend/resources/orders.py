from flask_smorest import Blueprint
from flask.views import MethodView
from flask_smorest import abort
from models import OrderModel
from schemas import OrderSchema, PlainOrderSchema
from flask_jwt_extended import jwt_required, get_jwt_identity
from db import db
from sqlalchemy.exc import SQLAlchemyError
from uuid import uuid4

blp = Blueprint("orders", __name__, description = "Operations on orders")

@blp.route('/orders')
class Reviews(MethodView):
    @blp.response(200, OrderSchema(many=True))
    def get(self):
        return OrderModel.query.all()
       
    @blp.arguments(PlainOrderSchema)
    @blp.response(201, OrderSchema)
    @jwt_required()
    def post(self, order_data):
        identity = get_jwt_identity()
        review = OrderModel(**order_data, id=str(uuid4()), user_id=identity)
  
        try:
            db.session.add(review)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while creating the order")
    
        return review