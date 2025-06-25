from marshmallow import Schema, fields

class PlainTypeSchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True)
    page_link = fields.Str()
    id = fields.Str(dump_only=True)
    category_id = fields.Str(required=True)

class TypeSchema(PlainTypeSchema):
    items = fields.List(fields.Nested("schemas.item.ItemSchema"), dump_only=True)
    category = fields.Nested("schemas.category.CategorySchema", dump_only=True)
    
    def __init__(self, include_category=False, include_items=False, **kwargs):
        exclude_fields = set()
        
        if not include_category:
            exclude_fields.add("category")
            
        if not include_items:
            exclude_fields.add("items")

        if "exclude" in kwargs:
            exclude_fields |= set(kwargs["exclude"])
            del kwargs["exclude"]

        super().__init__(exclude=exclude_fields, **kwargs)
    
class TypeUpdateSchema(Schema):
    name = fields.Str(required=True)
    icon_url = fields.Str(required=True)
    category_id = fields.Str(required=True)
    page_link = fields.Str(required=True)