from db import db

class ItemDetailsModel(db.Model):
    __tablename__ = "item_details"
    
    item_id = db.Column(db.String(80), db.ForeignKey("item.id"), primary_key = True)
    
    item = db.relationship("ItemModel", back_populates = "item_details")
    translations = db.relationship("ItemDetailsTranslationModel", back_populates="item_details", cascade="all, delete")
    