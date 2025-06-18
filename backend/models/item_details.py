from db import db

class ItemDetailsModel(db.Model):
    __tablename__ = "item_details"
    
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), primary_key = True)
    
    full_description = db.Column(db.Text)
    full_label = db.Column(db.Text, nullable=False)
    supplier = db.Column(db.Text, nullable=False)
    supplier_link = db.Column(db.String(80))
    
    ingridients = db.Column(db.Text, nullable=False)
    nutrition = db.Column(db.Text, nullable=False)
    item = db.relationship("ItemModel", back_populates = "item_details")
    