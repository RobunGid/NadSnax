from db import db
from constants import SupportedLanguages
from sqlalchemy import UniqueConstraint

class ItemTranslationModel(db.Model):
    __tablename__ = "item_translation"
    
    id = db.Column(db.String(80), primary_key=True)
    
    item_id = db.Column(db.String(80), db.ForeignKey("item.id"))
    item = db.relationship("ItemModel", back_populates="translations", lazy="select")
    
    price = db.Column(db.Numeric(10, 2), nullable=False)
    old_price = db.Column(db.Numeric(10, 2))
    
    label = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80))
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru, nullable=False)
    
    __table_args__ = (
        UniqueConstraint('item_id', 'lang_key', name='uix_item_translation'),
    )