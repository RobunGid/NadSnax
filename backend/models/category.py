from sqlalchemy.ext.hybrid import hybrid_property
from flask import request

from db import db

class CategoryModel(db.Model):
    __tablename__ = "category"
    
    id = db.Column(db.String(80), primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    
    page_link = db.Column(db.String(80), nullable=False)
    
    types = db.relationship('TypeModel', back_populates='category', lazy='select')
    items = db.relationship('ItemModel', back_populates='category', lazy='select')
    
    translations = db.relationship("CategoryTranslationModel", back_populates="category")
    
    @hybrid_property
    def icon_url(self):
        from app import BASE_URL
        return request.host_url + "/" + BASE_URL + "resources/icons/" + self.id + ".svg"
