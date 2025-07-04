from db import db
from constants import SupportedLanguages
from sqlalchemy import UniqueConstraint

class ItemTranslationModel(db.Model):
    __tablename__ = "items_translation"
    
    id = db.Column(db.String(80), primary_key=True)
    
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"))
    item = db.relationship("ItemModel", back_populates="translations", lazy="select")
    
    label = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80))
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru)
    
    __table_args__ = (
		UniqueConstraint('item_id', 'lang_key', name='uix_item_translation'),
	)