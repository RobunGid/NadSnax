from marshmallow import fields, Schema

class PlainCategorySchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(data_key="iconUrl")
    page_link = fields.Str(data_key="pageLink")
    id = fields.Str()
    
class CategoryUpdateSchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True, data_key="iconUrl")

class CategorySchema(PlainCategorySchema):
    types = fields.List(fields.Nested('schemas.type.TypeSchema'), dump_only=True, exclude=("category",))
    items = fields.List(fields.Nested("schemas.item.ItemSchema"), dump_only=True, exclude=("category",))