from marshmallow import Schema, fields

from schemas import CategorySchema

class PlainItemSchema(Schema):
    id = fields.Str(dump_only=True)
    label = fields.Str(required=True)
    page_link = fields.Str(required=True)
    description = fields.Str()
    price = fields.Float(required=True)
    converted_price = fields.Float(dump_only=True)
    converted_old_price = fields.Float(dump_only=True)
    old_price = fields.Float()
    is_bestseller = fields.Boolean()
    is_secretbox = fields.Boolean()
    category_id = fields.Str()
    type_id = fields.Str()
    
class ItemUpdateSchema(Schema):
    label = fields.Str(required=True)
    page_link = fields.Str(required=True)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    old_price = fields.Float(required=True)
    is_bestseller = fields.Boolean(required=True)
    is_secretbox = fields.Boolean(required=True)
    category_id = fields.Str(required=True)
    type_id = fields.Str(required=True)

class ItemTranslationSchema(Schema):
    label = fields.Str(required=True)
    description = fields.Str(required=True)

class ItemSchema(PlainItemSchema):
    category = fields.Nested("schemas.category.CategorySchema", dump_only=True, exclude=("items", "types")) 
    type = fields.Nested("schemas.type.TypeSchema", dump_only=True, exclude=("items", "category")) 
    item_details = fields.Nested("schemas.item_details.ItemDetailsSchema", dump_only=True, exclude=("item",))
    reviews = fields.Nested("schemas.review.ReviewSchema", dump_only=True, many=True, exclude=("item","user.reviews", "user.orders"))
    images = fields.Nested("schemas.item_image.ItemImageSchema", dump_only=True, many=True, exclude=("item",))
    
    # translation = fields.Nested(ItemTranslationSchema, dump_only=True)
    
    average_rating = fields.Float(dump_only=True)
    rating_count = fields.Int(dump_only=True)
    favorite_id = fields.Str(dump_only=True)