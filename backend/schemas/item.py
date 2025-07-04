from marshmallow import Schema, fields

class PlainItemSchema(Schema):
    id = fields.Str(dump_only=True)
    label = fields.Str(required=True)
    page_link = fields.Str(required=True)
    description = fields.Str()
    price = fields.Float(required=True)
    old_price = fields.Float()
    is_bestseller = fields.Boolean()
    is_secretbox = fields.Boolean()
    category_id = fields.Str()
    type_id = fields.Str()
    
class ItemUpdateSchema(Schema):
    label = fields.Str(required=True)
    page_link = fields.Str(required=True)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    old_price = fields.Float(required=True)
    is_bestseller = fields.Boolean(required=True)
    is_secretbox = fields.Boolean(required=True)
    category_id = fields.Str(required=True)
    type_id = fields.Str(required=True)

class ItemTranslationSchema(Schema):
    label = fields.Str(required=True)
    description = fields.Str(required=True)

class ItemSchema(PlainItemSchema):
    category = fields.Nested("schemas.category.CategorySchema", dump_only=True) 
    type = fields.Nested("schemas.type.TypeSchema", dump_only=True) 
    item_details = fields.Nested("schemas.item_details.ItemDetailsSchema", dump_only=True)
    reviews = fields.Nested("schemas.review.FullReviewSchema", dump_only=True, many=True)
    images = fields.Nested("schemas.item_image.ItemImageSchema", dump_only=True, many=True, exclude=("item",))
    
    translation = fields.Nested(ItemTranslationSchema, dump_only=True)
    
    average_rating = fields.Float(dump_only=True)
    rating_count = fields.Int(dump_only=True)
    favorite_id = fields.Str(dump_only=True, required=True)
    
    def __init__(self, include_category=False, 
                 include_type=False, 
                 include_item_details=False, 
                 include_reviews=False, 
                 include_images=False, 
                 include_favorite=False, 
                 include_reviews_user=False,
                 **kwargs):
        exclude_fields = set()
        if not include_category:
            exclude_fields.add("category")
            
        if not include_type:
            exclude_fields.add("type")

        if not include_item_details:
            exclude_fields.add("item_details")
            
        if not include_reviews:
            exclude_fields.add("reviews")
            
        if not include_images:
            exclude_fields.add("images")
        
        if not include_favorite:
            exclude_fields.add("favorite_id")
            
        if "exclude" in kwargs:
            exclude_fields |= set(kwargs["exclude"])
            del kwargs["exclude"]
            
        super().__init__(exclude=exclude_fields, **kwargs)
        
        if include_reviews:
            self.fields["reviews"].exclude += ('item',)
            
        if include_item_details:
            self.fields["item_details"].exclude += ("item",)
        
        if not include_reviews_user and include_reviews:
            self.fields["reviews"].exclude += ('user',)
            
class FullItemSchema(ItemSchema):
    def __init__(self, **kwargs):
        super().__init__(include_category=True, 
                 include_type=True, 
                 include_item_details=True, 
                 include_reviews=True, 
                 include_images=True, 
                 include_favorite=True, 
                 include_reviews_user=True, **kwargs)

