from db import db

class TypeModel(db.Model):
    __tablename__ = "types"
    
    id = db.Column(db.String(80), primary_key = True)
    name = db.Column(db.String(80), nullable = False)
    icon_url = db.Column(db.String(80), nullable = False)
    
    category_id = db.Column(db.String(80), db.ForeignKey("category.id"), nullable = False)
    category = db.relationship("CategoryModel", back_populates = "types")
    
    items = db.relationship('ItemModel', back_populates = 'type', lazy = 'dynamic')