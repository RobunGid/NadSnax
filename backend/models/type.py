from db import db
from sqlalchemy.ext.hybrid import hybrid_property
from flask import request

class TypeModel(db.Model):
    __tablename__ = "types"
    
    id = db.Column(db.String(80), primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    
    icon_url = db.Column(db.String(80), nullable=False)
    page_link = db.Column(db.String(80), nullable=False)
    
    category_id = db.Column(db.String(80), db.ForeignKey("categories.id"), nullable=False)
    category = db.relationship("CategoryModel", back_populates="types")
    
    translations = db.relationship("TypeTranslationModel", back_populates="type")
    
    items = db.relationship('ItemModel', back_populates='type', lazy='select')
    
    @hybrid_property
    def icon_url(self):
        return f'{request.host_url}resources/icons/{self.id}.svg'