from db import db
from sqlalchemy import CheckConstraint
from sqlalchemy.orm import validates
from datetime import datetime
from sqlalchemy import DateTime

class OrderItemModel(db.Model):
    __tablename__ = 'order_items'
    
    id = db.Column(db.String(80), primary_key=True)
    quantity = db.Column(db.Integer)
    
    order_id = db.Column(db.String(80), db.ForeignKey("orders.id"), nullable=False)
    order = db.relationship('OrderModel', back_populates="items")
    
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), nullable=False)
    item = db.relationship("ItemModel")
    
    __table_args__ = (
        CheckConstraint('quantity > 0 AND quantity <= 16',
                        name='quantity_boundaries'),
    )

    @validates('quantity')
    def validate_quantity(self, key, quantity) -> int:
        if quantity <= 0 or quantity > 16:
            raise ValueError('Quantity not in boundaries')
        return quantity