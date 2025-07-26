from marshmallow import Schema, fields
from marshmallow_enum import EnumField

from models.user import Role

class AuthUserSchema(Schema):
    id = fields.Str(dump_only=True)
    username = fields.Str(required=True)
    password = fields.Str(required=True, load_only=True)
    
class PlainUserSchema(AuthUserSchema):
    first_name = fields.Str(required=True, data_key="firstName")
    last_name = fields.Str(required=True, data_key="lastName")
    role = EnumField(Role)
    avatar_url = fields.Str(required=True, dump_only=True, data_key="avatarUrl")
    
class UserUpdateSchema(Schema):
    username = fields.Str(required=True)
    first_name = fields.Str(required=True, data_key="firstName")
    last_name = fields.Str(required=True, data_key="lastName")
    role = fields.Enum(Role)
    
class UserSchema(PlainUserSchema):
    reviews = fields.List(fields.Nested('schemas.review.ReviewSchema'), dump_only=True, exclude=("user",))
    orders = fields.List(fields.Nested('schemas.order.OrderSchema'), dump_only=True, exclude=("user",))