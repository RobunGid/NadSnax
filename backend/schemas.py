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
    name = fields.Str(required = True)
    icon_url = fields.Str()
    page_link = fields.Str()
    id = fields.Str()
    
class PlainTypeSchema(Schema):
    name = fields.Str(required = True)
    icon_url = fields.Str(required = True)
    page_link = fields.Str()
    id = fields.Str(dump_only = True)
    category_id = fields.Str(required = True)
    
class PlainItemSchema(Schema):
    id = fields.Str(dump_only = True)
    label = fields.Str(required = True)
    page_link = fields.Str()
    description = fields.Str()
    image_url = fields.Str()
    price = fields.Float(required = True)
    old_price = fields.Float()
    is_bestseller = fields.Boolean()
    is_secretbox = fields.Boolean()
    category_id = fields.Str(required = True)
    type_id = fields.Str(required = True)
    
class TypeSchema(PlainTypeSchema):
    items = fields.List(fields.Nested(PlainItemSchema()), dump_only = True)
    category = fields.Nested(PlainCategorySchema(), dump_only = True) 
    
    def __init__(self, include_category = False, include_items = False, **kwargs):
        exclude_fields = set()
        
        if not include_category:
            exclude_fields.add("category")
            
        if not include_items:
            exclude_fields.add("items")

        super().__init__(exclude = exclude_fields, **kwargs)
    
class TypeUpdateSchema(Schema):
	name = fields.Str(required = True)
	icon_url = fields.Str(required = True)
	category_id = fields.Str(required = True)
	page_link = fields.Str(required = True)


class ReviewSchema(PlainReviewSchema):
    user_id = fields.Str(required = True, load_only = True)
    user = fields.Nested(PlainUserSchema(), dump_only = True) 
    
    item_id = fields.Str(required = True, load_only = True)
    item = fields.Nested(PlainItemSchema(), dump_only = True)
    
class UserSchema(PlainUserSchema):
    reviews = fields.List(fields.Nested(PlainReviewSchema()), dump_only = True)
    
class ReviewUpdateSchema(Schema):
    text = fields.Str(required = True)
    rating = fields.Int(required = True)
    
class UserUpdateSchema(Schema):
    username = fields.Str(required = True)
    avatar_url = fields.Str(required = True)
    
class CategorySchema(PlainCategorySchema):
    types = fields.List(fields.Nested(PlainTypeSchema()), dump_only = True)
    items = fields.List(fields.Nested(PlainItemSchema()), dump_only = True)
    
    def __init__(self, include_types = False, include_items = False, **kwargs):
        exclude_fields = set()
        
        if not include_types:
            exclude_fields.add("types")
            
        if not include_items:
            exclude_fields.add("items")

        super().__init__(exclude = exclude_fields, **kwargs)
    
class CategoryUpdateSchema(Schema):
    name = fields.Str(required = True)
    icon_url = fields.Str(required = True)
    
class ItemUpdateSchema(Schema):
    label = fields.Str(required = True)
    page_link = fields.Str(required = True)
    description = fields.Str(required = True)
    image_url = fields.Str(required = True)
    price = fields.Float(required = True)
    old_price = fields.Float(required = True)
    is_bestseller = fields.Boolean(required = True)
    category_id = fields.Str(required = True)
    type_id = fields.Str(required = True)
    
class PlainItemDetailsSchema(Schema):
	full_label = fields.Str(required = True)
	full_description = fields.Str(required = True)
	item_id = fields.Str(required = True)
	ingridients = fields.Str(required = True)
	supplier = fields.Str(required = True)
	nutrition = fields.Str(required = True)
 
class ItemSchema(PlainItemSchema):
    category = fields.Nested(PlainCategorySchema(), dump_only = True) 
    type = fields.Nested(PlainTypeSchema(), dump_only = True) 
    item_details = fields.Nested(PlainItemDetailsSchema(), dump_only = True)
    reviews = fields.Nested(PlainReviewSchema(), dump_only = True, many = True)
    
    average_rating = fields.Float(dump_only = True)
    rating_count = fields.Int(dump_only = True)
    
    def __init__(self, include_category = False, include_type = False, include_item_details = False, include_reviews = False, **kwargs):
        exclude_fields = set()
        
        if not include_category:
            exclude_fields.add("category")
            
        if not include_type:
            exclude_fields.add("type")

        if not include_item_details:
            exclude_fields.add("item_details")
            
        if not include_reviews:
            exclude_fields.add("reviews")

        super().__init__(exclude = exclude_fields, **kwargs)
    
class ItemDetailsSchema(PlainItemDetailsSchema):
    item = fields.Nested(ItemSchema(), dump_only = True)