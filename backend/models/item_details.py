from db import db

class ItemDetailsModel(db.Model):
    __tablename__ = "item_details"
    
    id = db.Column(db.String(80), primary_key = True)
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), nullable = False)
    
    full_description = db.Column(db.String(255))
    full_name = db.Column(db.String(80), nullable = False)
    
    item = db.relationship("ItemModel", back_populates = "item_details")
    