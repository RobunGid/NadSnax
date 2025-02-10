from db import db

class ItemModel(db.Model):
    __tablename__ = "items"
    
    id = db.Column(db.String(80), primary_key = True)
    label = db.Column(db.String(80), nullable = False)
    price = db.Column(db.Float(precision = 2), unique = False, nullable = False)
    old_price = db.Column(db.String(80))
    description = db.Column(db.String(80))
    image_url = db.Column(db.String(80), nullable = False)
    isBestseller = db.Column(db.Boolean())
    pageLink = db.Column(db.String(80), nullable = False)
    
    category_id = db.Column(db.String(80), db.ForeignKey("category.id"), nullable = False)
    type_id = db.Column(db.String(80), db.ForeignKey("types.id"), nullable = False)
    
    category = db.relationship("CategoryModel", back_populates = "items")
    type = db.relationship("TypeModel", back_populates = "items")