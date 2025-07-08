from marshmallow import Schema, fields

class PlainItemDetailsSchema(Schema):
    full_label = fields.Str(required=True)
    full_description = fields.Str()
    item_id = fields.Str(required=True)
    ingridients = fields.Str(required=True)
    supplier = fields.Str(required=True)
    supplier_link = fields.Str(required=True)
    nutrition = fields.Str(required=True)
    
class ItemDetailsTranslationSchema(Schema):
    full_label = fields.Str(required=True)
    full_description = fields.Str()
    ingridients = fields.Str(required=True)
    supplier = fields.Str(required=True)
    nutrition = fields.Str(required=True)
    
class ItemDetailsSchema(PlainItemDetailsSchema):
    item = fields.Nested("schemas.item.ItemSchema", dump_only=True, exclude=("item_details",))
    # translation = fields.Nested(ItemDetailsTranslationSchema, dump_only=True)