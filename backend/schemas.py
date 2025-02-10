from marshmallow import Schema, fields

class PlainUserSchema(Schema):
    id = fields.Str(dump_only = True)
    username = fields.Str(required = True)
    avatar_url = fields.Str(required = True)
    
class PlainReviewSchema(Schema):
    id = fields.Str(dump_only = True)
    text = fields.Str(required = True)
    rating = fields.Int()
    
class ReviewSchema(PlainReviewSchema):
    user_id = fields.Str(required = True, load_only = True)
    user = fields.Nested(PlainUserSchema(), dump_only = True) 
    
class UserSchema(PlainUserSchema):
    reviews = fields.List(fields.Nested(PlainReviewSchema()), dump_only = True)
    
