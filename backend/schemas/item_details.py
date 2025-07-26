from marshmallow import Schema, fields

from constants import SupportedLanguages

class PlainItemDetailsSchema(Schema):
    item_id = fields.Str(required=True, data_key="itemId")
    
class ItemDetailsTranslationSchema(Schema):
    item_id = fields.Str(required=True, data_key="itemId")
    full_label = fields.Str(required=True, data_key="fullLabel")
    full_description = fields.Str(required=True, data_key="fullDescription")
    ingridients = fields.Str(required=True)
    supplier = fields.Str(required=True)
    supplier_link = fields.Str(required=True, data_key="supplierLink")
    nutrition = fields.Str(required=True)
    lang_key = fields.Enum(SupportedLanguages, data_key="langKey")
    
class ItemDetailsSchema(PlainItemDetailsSchema):
    item = fields.Nested("schemas.item.ItemSchema", dump_only=True, exclude=("item_details",))