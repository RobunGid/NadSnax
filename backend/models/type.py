from sqlalchemy.ext.hybrid import hybrid_property
from flask import request

from db import db

class TypeModel(db.Model):
    __tablename__ = "type"
    
    id = db.Column(db.String(80), primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    
    icon_url = db.Column(db.String(80), nullable=False)
    page_link = db.Column(db.String(80), nullable=False)
    
    category_id = db.Column(db.String(80), db.ForeignKey("category.id"), nullable=False)
    category = db.relationship("CategoryModel", back_populates="types")
    
    translations = db.relationship("TypeTranslationModel", back_populates="type")
    
    items = db.relationship('ItemModel', back_populates='type', lazy='select')
    
    @hybrid_property
    def icon_url(self):
        from app import BASE_URL
        return request.host_url + "/" + BASE_URL + "resources/icons/" + self.id + ".svg"