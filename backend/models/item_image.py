from flask import request
from sqlalchemy.ext.hybrid import hybrid_property

from db import db

class ItemImageModel(db.Model):
    __tablename__ = "item_image"
    
    id = db.Column(db.String(80), primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=True)

    is_main = db.Column(db.Boolean())
    
    item_id = db.Column(db.String(80), db.ForeignKey("item.id"), nullable=False)
    item = db.relationship('ItemModel', back_populates='images', lazy='select')
    
    @hybrid_property
    def url(self):
        return request.host_url + "/" + BASE_URL + 'resources/images/' + self.name + '.png'
    
    def __repr__(self):
        from app import BASE_URL
        return f"<ItemImageModel(id='{self.id}', name='{self.name}', title='{self.title}', is_main={self.is_main}, item_id='{self.item_id}')>"
