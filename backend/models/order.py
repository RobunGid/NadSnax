from db import db
from sqlalchemy import CheckConstraint
from sqlalchemy.orm import validates
from datetime import datetime
from sqlalchemy import DateTime

class OrderModel(db.Model):
    __tablename__ = 'orders'
    
    id = db.Column(db.String(80), primary_key = True)
    quantity = db.Column(db.Integer)
    
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), nullable=False)
    item = db.relationship("ItemModel")
    
    user_id = db.Column(db.String(80), db.ForeignKey("users.id"), nullable=False)
    user = db.relationship("UserModel", back_populates = "orders")
    
    __table_args__ = (
        CheckConstraint('quantity > 0 AND quantity <= 16',
                        name='quantity_boundaries'),
    )

    created_at = db.Column(DateTime, default=datetime.now, nullable=False)

    @validates('quantity')
    def validate_quantity(self, key, quantity) -> int:
        if quantity <= 0 or quantity > 16:
            raise ValueError('Quantity not in boundaries')
        return quantity