
from db import db
from constants import SupportedLanguages
from sqlalchemy import UniqueConstraint

class CategoryTranslationModel(db.Model):
    __tablename__ = "category_translation"
    
    id = db.Column(db.String(80), primary_key=True)
    
    category_id = db.Column(db.String(80), db.ForeignKey("category.id"))
    category = db.relationship("CategoryModel", back_populates="translations", lazy="select")
    
    name = db.Column(db.String(80), nullable=False)
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru, nullable=False)
    
    __table_args__ = (
		UniqueConstraint('category_id', 'lang_key', name='uix_category_translation'),
	)