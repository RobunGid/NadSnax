from marshmallow import Schema, fields

class FavoriteSchema(Schema):
    item_id = fields.Str(required=True)
    user_id = fields.Str(required=True, dump_only=True)
    id = fields.Str(required=True, dump_only=True)
    
