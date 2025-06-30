from marshmallow import fields, Schema
from marshmallow_enum import EnumField
from models.order import OrderStatus

class PlainOrderItemSchema(Schema):
    id = fields.Str(dump_only=True)
    item_id = fields.Str(required=True)
    item = fields.Nested("schemas.item.FullItemSchema", dump_only=True)
    quantity = fields.Int(required=True)
    
class PlainOrderSchema(Schema):
    id = fields.Str(dump_only=True)
    created_at = fields.DateTime(required=True, dump_only=True)
    order_id = fields.Str(required=True, dump_only=True)
    status = EnumField(OrderStatus)
    pickup_point = fields.Str(required=True)
    user_id = fields.Str(required=True, dump_only=True)
    
class OrderSchema(PlainOrderSchema):
    user = fields.Nested("schemas.user.UserSchema", dump_only=True) 
    items = fields.Nested(PlainOrderItemSchema(many=True))
    
    def __init__(self, include_user=True, include_items=True, **kwargs):
        exclude_fields = set()
        if not include_user:
            exclude_fields.add("user")
            
        if not include_items:
            exclude_fields.add("items")

        if "exclude" in kwargs:
            exclude_fields |= set(kwargs["exclude"])
            del kwargs["exclude"]

        super().__init__(exclude=exclude_fields, **kwargs)