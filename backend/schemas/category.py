from marshmallow import fields, Schema

class PlainCategorySchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str()
    page_link = fields.Str()
    id = fields.Str()
    
class CategoryUpdateSchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True)

class CategorySchema(PlainCategorySchema):
    types = fields.List(fields.Nested('schemas.type.TypeSchema'), dump_only=True, exclude=("category",))
    items = fields.List(fields.Nested("schemas.item.ItemSchema"), dump_only=True, exclude=("category",))