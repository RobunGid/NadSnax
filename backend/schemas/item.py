from tarfile import data_filter
from marshmallow import Schema, fields

from constants import SupportedLanguages

class PlainItemSchema(Schema):
    id = fields.Str(dump_only=True)
    label = fields.Str(required=True)
    name = fields.Str(required=True)
    description = fields.Str()
    price = fields.Float(required=True)
    old_price = fields.Float(data_key="oldPrice")
    is_bestseller = fields.Boolean(data_key="isBestseller")
    is_secretbox = fields.Boolean(data_key="isSecretbox")
    category_id = fields.Str(data_key="categoryId")
    type_id = fields.Str(data_key="typeId")
    
class ItemTranslationSchema(Schema):
    id = fields.Str(dump_only=True)
    lang_key = fields.Enum(SupportedLanguages, data_key="langKey")
    item_id = fields.Str(required=True, data_key="itemId")
    label = fields.Str(required=True)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    old_price = fields.Float(data_key="oldPrice")

class ItemSchema(PlainItemSchema):
    category = fields.Nested("schemas.category.CategorySchema", dump_only=True, exclude=("items", "types")) 
    type = fields.Nested("schemas.type.TypeSchema", dump_only=True, exclude=("items", "category")) 
    item_details = fields.Nested("schemas.item_details.ItemDetailsSchema", dump_only=True, exclude=("item",), data_key="itemDetails")
    reviews = fields.Nested("schemas.review.ReviewSchema", dump_only=True, many=True, exclude=("item","user.reviews", "user.orders"))
    images = fields.Nested("schemas.item_image.ItemImageSchema", dump_only=True, many=True, exclude=("item",))
    
    average_rating = fields.Float(dump_only=True, data_key="averageRating")
    rating_count = fields.Int(dump_only=True, data_key="ratingCount")
    favorite_id = fields.Str(dump_only=True, data_key="favoriteId")
    
class GetItemSchema(Schema):
    items = fields.Nested(ItemSchema(many=True))
    total_items = fields.Int(data_key="totalItems")
    
class PostItemSchema(Schema):
    item = fields.Str(required=True)
    item_translations = fields.Str(data_key="itemTranslations")
    item_details = fields.Str(data_key="itemDetails")
    item_details_translations = fields.Str(data_key="itemDetailsTranslations")
    item_images = fields.Str(data_key="itemImages")
    item_images_translations = fields.Str(data_key="itemImagesTranslations")