from db import db

from sqlalchemy import DateTime, UniqueConstraint
from datetime import datetime

class FavoriteModel(db.Model):
    __tablename__ = 'favorites'
    
    id = db.Column(db.String(80), primary_key = True)
    
    user_id = db.Column(db.String(80), db.ForeignKey("users.id"), nullable=False)
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), nullable=False)
    
    user = db.relationship('UserModel', backref='favorite', lazy='select')
    item = db.relationship('ItemModel', backref='favorite', lazy='select')
    
    added_at = db.Column(DateTime, default=datetime.now, nullable=False)
    
    __table_args__ = (
		UniqueConstraint('user_id', 'item_id', name='favorite_uix_user_item'),
	)