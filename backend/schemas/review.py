from marshmallow import Schema, fields

class PlainReviewSchema(Schema):
    id = fields.Str(dump_only=True)
    text = fields.Str(required=True)
    rating = fields.Int(required=True)
    created_at = fields.DateTime(required=True, dump_only=True)
    item_id = fields.Str(required=True)
    user_id = fields.Str(required=True, dump_only=True)
    
class ReviewUpdateSchema(Schema):
    text = fields.Str(required=True)
    rating = fields.Int(required=True)
    
class ReviewSchema(PlainReviewSchema):
    user = fields.Nested('schemas.user.UserSchema', dump_only=True, exclude=("reviews",)) 
    item = fields.Nested('schemas.item.ItemSchema', dump_only=True, exclude=("reviews",))