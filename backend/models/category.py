from db import db

class CategoryModel(db.Model):
    __tablename__ = "categories"
    
    id = db.Column(db.String(80), primary_key = True)
    name = db.Column(db.String(80), nullable = False)
    icon_url = db.Column(db.String(80), nullable = False)
    
    types = db.relationship('TypeModel', back_populates = 'category', lazy = 'select')
    items = db.relationship('ItemModel', back_populates = 'category', lazy = 'select')