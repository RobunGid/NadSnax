from marshmallow import fields, Schema
from marshmallow_enum import EnumField

from models.order import OrderStatus

class PlainOrderItemSchema(Schema):
    id = fields.Str(dump_only=True)
    item_id = fields.Str(required=True, data_key="itemId")
    quantity = fields.Int(required=True)
    
class OrderItemSchema(PlainOrderItemSchema):
    item = fields.Nested("schemas.item.ItemSchema", dump_only=True)
    
class PlainOrderSchema(Schema):
    id = fields.Str(dump_only=True)
    created_at = fields.DateTime(required=True, dump_only=True, data_key="createdAt")
    order_id = fields.Str(required=True, dump_only=True, data_key="orderId")
    status = EnumField(OrderStatus)
    pickup_point = fields.Str(required=True, data_key="pickupPoint")
    user_id = fields.Str(required=True, dump_only=True, data_key="userId")
    
class OrderSchema(PlainOrderSchema):
    user = fields.Nested("schemas.user.UserSchema", dump_only=True, exclude=("orders", "reviews.user")) 
    items = fields.Nested(OrderItemSchema(many=True))