from marshmallow import Schema, fields

class PlainUserSchema(Schema):
    id = fields.Str(dump_only = True)
    username = fields.Str(required = True)
    avatar_url = fields.Str(required = True)
    
class PlainReviewSchema(Schema):
    id = fields.Str(dump_only = True)
    text = fields.Str(required = True)
    rating = fields.Int()
    
class PlainCategorySchema(Schema):
    name = fields.Str()
    icon_url = fields.Str()
    id = fields.Str()
    
class PlainTypeSchema(Schema):
    name = fields.Str()
    icon_url = fields.Str()
    id = fields.Str(dump_only = True)
    category_id = fields.Str()
    
class PlainItemSchema(Schema):
    id = fields.Str(dump_only = True)
    label = fields.Str()
    page_link = fields.Str()
    description = fields.Str()
    image_url = fields.Str()
    price = fields.Float()
    old_price = fields.Float()
    is_bestseller = fields.Boolean()
    category_id = fields.Str()
    type_id = fields.Str()
    
class TypeSchema(PlainTypeSchema):
    items = fields.List(fields.Nested(PlainItemSchema()), dump_only = True)
    
class ItemSchema(PlainItemSchema):
    category = fields.Nested(PlainCategorySchema(), dump_only = True) 
    type = fields.Nested(PlainTypeSchema(), dump_only = True) 

class ReviewSchema(PlainReviewSchema):
    user_id = fields.Str(required = True, load_only = True)
    user = fields.Nested(PlainUserSchema(), dump_only = True) 
    
class UserSchema(PlainUserSchema):
    reviews = fields.List(fields.Nested(PlainReviewSchema()), dump_only = True)
    
class ReviewUpdateSchema(Schema):
    text = fields.Str()
    rating = fields.Int()
    
class UserUpdateSchema(Schema):
    username = fields.Str()
    avatar_url = fields.Str()
    
class CategorySchema(Schema):
    types = fields.List(fields.Nested(PlainTypeSchema()), dump_only = True)
    items = fields.List(fields.Nested(PlainItemSchema()), dump_only = True)
    