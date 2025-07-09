from marshmallow import Schema, fields

from constants import SupportedLanguages

class PlainItemDetailsSchema(Schema):
    full_label = fields.Str(required=True)
    full_description = fields.Str()
    item_id = fields.Str(required=True)
    ingridients = fields.Str(required=True)
    supplier = fields.Str(required=True)
    supplier_link = fields.Str(required=True)
    nutrition = fields.Str(required=True)
    
class ItemDetailsTranslationSchema(Schema):
    item_id = fields.Str(required=True)
    full_label = fields.Str(required=True)
    full_description = fields.Str(required=True)
    ingridients = fields.Str(required=True)
    supplier = fields.Str(required=True)
    nutrition = fields.Str(required=True)
    lang_key = fields.Enum(SupportedLanguages)
    
class ItemDetailsSchema(PlainItemDetailsSchema):
    item = fields.Nested("schemas.item.ItemSchema", dump_only=True, exclude=("item_details",))
    translation = fields.Nested(ItemDetailsTranslationSchema, dump_only=True)