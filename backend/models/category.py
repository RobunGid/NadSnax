from db import db
from sqlalchemy.ext.hybrid import hybrid_property
from flask import request

class CategoryModel(db.Model):
    __tablename__ = "categories"
    
    id = db.Column(db.String(80), primary_key = True)
    name = db.Column(db.String(80), nullable = False)
    page_link = db.Column(db.String(80), nullable = False)
    
    types = db.relationship('TypeModel', back_populates = 'category', lazy = 'select')
    items = db.relationship('ItemModel', back_populates = 'category', lazy = 'select')
    
    @hybrid_property
    def icon_url(self):
        return f'{request.host_url}resources/icons/{self.id}.svg'