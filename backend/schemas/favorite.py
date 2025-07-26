from marshmallow import Schema, fields

class FavoriteSchema(Schema):
    item_id = fields.Str(required=True, data_key="itemId")
    user_id = fields.Str(required=True, dump_only=True, data_key="userId")
    id = fields.Str(required=True, dump_only=True)
    
