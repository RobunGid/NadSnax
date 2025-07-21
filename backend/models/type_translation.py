from constants import SupportedLanguages
from sqlalchemy import UniqueConstraint

from db import db

class TypeTranslationModel(db.Model):
    __tablename__ = "type_translation"
    
    id = db.Column(db.String(80), primary_key=True)
    
    type_id = db.Column(db.String(80), db.ForeignKey("type.id"))
    type = db.relationship("TypeModel", back_populates="translations", lazy="select")
    
    name = db.Column(db.String(80), nullable=False)
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru, nullable=False)
    
    __table_args__ = (
		UniqueConstraint('type_id', 'lang_key', name='uix_type_translation'),
	)