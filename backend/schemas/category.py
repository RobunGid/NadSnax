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
    types = fields.List(fields.Nested('schemas.type.TypeSchema'), dump_only=True)
    items = fields.List(fields.Nested("schemas.item.ItemSchema"), dump_only=True)
    
    def __init__(self, include_types=False, include_items=False, **kwargs):
        exclude_fields = set()
        
        if not include_types:
            exclude_fields.add("types")
            
        if not include_items:
            exclude_fields.add("items")

        if "exclude" in kwargs:
            exclude_fields |= set(kwargs["exclude"])
            del kwargs["exclude"]

        super().__init__(exclude = exclude_fields, **kwargs)