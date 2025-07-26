from marshmallow import Schema, fields

class PlainTypeSchema(Schema):
    id = fields.Str(dump_only=True)
    category_id = fields.Str(required=True, data_key="categoryId")
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True, data_key="iconUrl")
    page_link = fields.Str(data_key="pageLink")

class TypeSchema(PlainTypeSchema):
    items = fields.Nested("schemas.item.PlainItemSchema", many=True, dump_only=True)
    category = fields.Nested("schemas.category.PlainCategorySchema", dump_only=True)
    
class TypeUpdateSchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True, data_key="iconUrl")
    category_id = fields.Str(required=True, data_key="categoryId")
    page_link = fields.Str(required=True, data_key="pageLink")