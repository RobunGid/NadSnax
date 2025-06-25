from marshmallow import Schema, fields

class PlainReviewSchema(Schema):
    id = fields.Str(dump_only=True)
    text = fields.Str(required=True)
    rating = fields.Int(required=True)
    created_at = fields.DateTime(required=True, dump_only=True)
    item_id = fields.Str(required=True)
    
class ReviewUpdateSchema(Schema):
    text = fields.Str(required=True)
    rating = fields.Int(required=True)
    
class ReviewSchema(PlainReviewSchema):
    user_id = fields.Str(required=True)
    
    user = fields.Nested('schemas.user.PlainUserSchema', dump_only=True) 
    item = fields.Nested('schemas.item.ItemSchema', dump_only=True)
        
    def __init__(self, include_item=False, include_user=False, **kwargs):
        exclude_fields = set()
        
        if not include_user:
            exclude_fields.add("user")
            
        if not include_item:
            exclude_fields.add("item")

        if "exclude" in kwargs:
            exclude_fields |= set(kwargs["exclude"])
            del kwargs["exclude"]

        super().__init__(exclude=exclude_fields, **kwargs)
        
class FullReviewSchema(ReviewSchema):
    def __init__(self, **kwargs):
        super().__init__(**kwargs, include_item=True, include_user=True)