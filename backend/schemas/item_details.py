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
    item = fields.Nested("schemas.item.ItemSchema", dump_only=True)
    translation = fields.Nested(ItemDetailsTranslationSchema, dump_only=True)
    
    def __init__(self, include_item=True, **kwargs):
        exclude_fields = set()

        if not include_item:
            exclude_fields.add("item")

        if "exclude" in kwargs:
            exclude_fields |= set(kwargs["exclude"])
            del kwargs["exclude"]

        super().__init__(exclude=exclude_fields, **kwargs)