from db import db
from constants import SupportedLanguages
from sqlalchemy import UniqueConstraint

class ItemDetailsTranslationModel(db.Model):
    __tablename__ = "item_details_translation"
    
    id = db.Column(db.String(80), primary_key=True)
    
    item_id = db.Column(db.String(80), db.ForeignKey("item_details.item_id"))
    
    item_details = db.relationship("ItemDetailsModel", back_populates="translations", lazy="select")
    
    full_description = db.Column(db.Text)
    full_label = db.Column(db.Text, nullable=False)
    supplier = db.Column(db.Text, nullable=False)
    
    ingridients = db.Column(db.Text, nullable=False)
    nutrition = db.Column(db.Text, nullable=False)
    
    lang_key = db.Column(db.Enum(SupportedLanguages), default=SupportedLanguages.ru)
    
    __table_args__ = (
		UniqueConstraint('item_id', 'lang_key', name='uix_item_details_translation'),
	)