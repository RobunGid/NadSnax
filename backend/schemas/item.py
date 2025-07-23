from marshmallow import Schema, fields

from constants import SupportedLanguages

class PlainItemSchema(Schema):
    id = fields.Str(dump_only=True)
    label = fields.Str(required=True)
    name = fields.Str(required=True)
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
    name = fields.Str(required=True)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    old_price = fields.Float(required=True)
    is_bestseller = fields.Boolean(required=True)
    is_secretbox = fields.Boolean(required=True)
    category_id = fields.Str(required=True)
    type_id = fields.Str(required=True)

class ItemTranslationSchema(Schema):
    lang_key = fields.Enum(SupportedLanguages)
    item_id = fields.Str(required=True)
    label = fields.Str(required=True)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    old_price = fields.Float()

class ItemSchema(PlainItemSchema):
    category = fields.Nested("schemas.category.CategorySchema", dump_only=True, exclude=("items", "types")) 
    type = fields.Nested("schemas.type.TypeSchema", dump_only=True, exclude=("items", "category")) 
    item_details = fields.Nested("schemas.item_details.ItemDetailsSchema", dump_only=True, exclude=("item",))
    reviews = fields.Nested("schemas.review.ReviewSchema", dump_only=True, many=True, exclude=("item","user.reviews", "user.orders"))
    images = fields.Nested("schemas.item_image.ItemImageSchema", dump_only=True, many=True, exclude=("item",))
    
    average_rating = fields.Float(dump_only=True)
    rating_count = fields.Int(dump_only=True)
    favorite_id = fields.Str(dump_only=True)
    
class PostItemSchema(Schema):
    # item = fields.Nested(ItemSchema, required=True)
    # item_translations = fields.Nested(ItemTranslationSchema, many=True, exclude=("item_id",))
    # item_details = fields.Nested("schemas.item_details.ItemDetailsSchema", exclude=("item_id",))
    # item_details_translations = fields.Nested("schemas.item_details.ItemDetailsTranslationSchema", many=True, exclude=("item_id",))
    # images = fields.Nested("schemas.item_image.ItemImageSchema", many=True, exclude=("item_id",))
    item = fields.Str(required=True)
    item_translations = fields.Str()
    item_details = fields.Str()
    item_details_translations = fields.Str()
    item_images = fields.Str()
    item_images_translations = fields.Str()