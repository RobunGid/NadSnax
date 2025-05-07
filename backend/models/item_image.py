from db import db

class ItemImageModel(db.Model):
    __tablename__ = "item_image"
    
    id = db.Column(db.String(80), primary_key = True)
    title = db.Column(db.String(80), nullable = False)
    alt = db.Column(db.String(80), nullable = False)
    is_main = db.Column(db.Boolean())
    file_name = db.Column(db.String(80), nullable = False, unique = True)
    
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), nullable = False)
    item = db.relationship('ItemModel', back_populates = 'images', lazy = 'select')