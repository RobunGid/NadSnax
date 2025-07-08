from db import db
from sqlalchemy import CheckConstraint
from datetime import datetime
from sqlalchemy import DateTime
from constants import OrderStatus

class OrderModel(db.Model):
    __tablename__ = 'orders'
    
    id = db.Column(db.String(80), primary_key=True)
    
    pickup_point = db.Column(db.String(255), nullable=False)
    
    status = db.Column(db.Enum(OrderStatus), default=OrderStatus.processing)
    
    user_id = db.Column(db.String(80), db.ForeignKey("users.id"), nullable=False)
    user = db.relationship("UserModel", back_populates="orders")
    
    items = db.relationship("OrderItemModel", back_populates="order", cascade="all,delete")
    
    created_at = db.Column(DateTime, default=datetime.now, nullable=False)
    
    __table_args__ = (
        CheckConstraint('quantity > 0 AND quantity <= 16',
                        name='quantity_boundaries'),
    )