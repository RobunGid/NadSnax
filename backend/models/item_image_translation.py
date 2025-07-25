from db import db
from constants import SupportedLanguages

class ItemImageTranslationModel(db.Model):
    __tablename__ = "item_image_translation"
    
    id = db.Column(db.String(80), primary_key=True)
    
    item_image_id = db.Column(db.String(80), db.ForeignKey("item_image.id"))
    
    title = db.Column(db.String(80), nullable=False)
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru)
