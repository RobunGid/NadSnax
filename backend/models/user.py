from db import db
import enum
from flask import request
from sqlalchemy.ext.hybrid import hybrid_property

class Role(enum.Enum):
    user = 'user'
    moderator = 'moderator'
    admin = 'admin'

class UserModel(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.String(80), primary_key = True)
    
    username = db.Column(db.String(80), nullable = False, unique = True)
    password = db.Column(db.String(128), nullable = False)
    
    role = db.Column(db.Enum(Role))
    
    first_name = db.Column(db.String(32), nullable = False)
    last_name = db.Column(db.String(32), nullable = False)
    
    reviews = db.relationship('ReviewModel', back_populates = 'user')
    
    @hybrid_property
    def avatar_url(self):
        return f'{request.host_url}/avatar/{self.username}.png'