from db import db
from constants import SupportedLanguages

class ItemDetailsTranslationModel(db.Model):
    __tablename__ = "item_details_translation"
    
    item_id = db.Column(db.String(80), db.ForeignKey("item_details.item_id"), primary_key = True)
    
    full_description = db.Column(db.Text)
    full_label = db.Column(db.Text, nullable=False)
    supplier = db.Column(db.Text, nullable=False)
    
    ingridients = db.Column(db.Text, nullable=False)
    nutrition = db.Column(db.Text, nullable=False)
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru)
    