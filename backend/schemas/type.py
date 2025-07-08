from marshmallow import Schema, fields

class PlainTypeSchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True)
    page_link = fields.Str()
    id = fields.Str(dump_only=True)
    category_id = fields.Str(required=True)

class TypeSchema(PlainTypeSchema):
    items = fields.Nested("schemas.item.PlainItemSchema", many=True, dump_only=True)
    category = fields.Nested("schemas.category.PlainCategorySchema", dump_only=True)
    
class TypeUpdateSchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True)
    category_id = fields.Str(required=True)
    page_link = fields.Str(required=True)