from marshmallow import Schema, fields

from constants import SupportedLanguages

class PlainItemImageSchema(Schema):
    id = fields.Str(dump_only=True)
    title = fields.Str(required=True)
    is_main = fields.Boolean(data_key="isMain")
    name = fields.Str(required=True)
    item_id = fields.Str(required=True, data_key="itemid")
    url = fields.Str(dump_only=True)
 
class ItemImageSchema(PlainItemImageSchema):
    item = fields.Nested("schemas.item.ItemSchema", dump_only=True, exclude=("images",))
    
class ItemImageTranslationSchema(Schema):
    id = fields.Str(dump_only=True)
    lang_key = fields.Enum(SupportedLanguages, data_key="langKey")
    item_image_id = fields.Str(required=True, data_key="itemImageId")
    title = fields.Str(required=True)