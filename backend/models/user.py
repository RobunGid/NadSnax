from db import db
import enum
from flask import request
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import CheckConstraint
from sqlalchemy.orm import validates
from constants import Role

class UserModel(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.String(80), primary_key=True)
    
    username = db.Column(db.String(80), nullable=False, unique=True)
    password = db.Column(db.String(256), nullable=False)
    
    role = db.Column(db.Enum(Role), default=Role.user)
    
    first_name = db.Column(db.String(32), nullable=False)
    last_name = db.Column(db.String(32), nullable=False)
    
    reviews = db.relationship('ReviewModel', back_populates='user')
    orders = db.relationship("OrderModel", back_populates="user")
    
    __table_args__ = (
        CheckConstraint('char_length(first_name) > 2',
                        name='first_name_min_length'),
        CheckConstraint('char_length(last_name) > 2',
                        name='last_name_min_length'),
        CheckConstraint('char_length(username) > 4',
                        name='username_min_length'),
    )

    @validates('first_name')
    def validate_first_name(self, key, first_name) -> str:
        if len(first_name) <= 2:
            raise ValueError('First name too short')
        return first_name
    @validates('last_name')
    def validate_last_name(self, key, last_name) -> str:
        if len(last_name) <= 2:
            raise ValueError('Last name too short')
        return last_name
    @validates('username')
    def validate_username(self, key, username) -> str:
        if len(username) <= 4:
            raise ValueError('Username too short')
        return username
    
    @hybrid_property
    def avatar_url(self):
        return f'{request.host_url}avatar/{self.id}.png'