from db import db

class UserModel(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.String(80), primary_key = True)
    username = db.Column(db.String(80), nullable = False)
    avatar_url = db.Column(db.String(255), nullable = True)
    password = db.Column(db.String, nullable=False)
    
    reviews = db.relationship('ReviewModel', back_populates = 'user')