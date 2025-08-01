from marshmallow import Schema, fields

class PlainReviewSchema(Schema):
    id = fields.Str(dump_only=True)
    text = fields.Str(required=True)
    rating = fields.Int(required=True)
    created_at = fields.DateTime(required=True, dump_only=True, data_key="createdAt")
    item_id = fields.Str(required=True, data_key="itemId")
    user_id = fields.Str(required=True, dump_only=True, data_key="userId")
    
class ReviewUpdateSchema(Schema):
    text = fields.Str(required=True)
    rating = fields.Int(required=True)
    
class ReviewSchema(PlainReviewSchema):
    user = fields.Nested('schemas.user.UserSchema', dump_only=True, exclude=("reviews", "orders")) 
    item = fields.Nested('schemas.item.ItemSchema', dump_only=True, exclude=("reviews",))