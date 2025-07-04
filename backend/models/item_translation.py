from db import db
from constants import SupportedLanguages

class ItemTranslationModel(db.Model):
    __tablename__ = "items_translation"
    
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), primary_key=True)
    label = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80))
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru)