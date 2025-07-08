from marshmallow import Schema, fields

class PlainItemImageSchema(Schema):
    id = fields.Str(dump_only=True)
    title = fields.Str(required=True)
    alt = fields.Str(required=True)
    is_main = fields.Boolean()
    file_name = fields.Str(required=True)
    item_id = fields.Str(required=True)
    url = fields.Str(dump_only=True)
 
class ItemImageSchema(PlainItemImageSchema):
    item = fields.Nested("schemas.item.ItemSchema", dump_only=True, exclude=("images",))
    
