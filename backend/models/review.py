from db import db

class ReviewModel(db.Model):
    __tablename__ = "reviews"
    
    id = db.Column(db.String(80), primary_key = True)
    text = db.Column(db.String(160))
    rating = db.Column(db.Integer, db.CheckConstraint('rating BETWEEN 1 and 5'), nullable = False)
    
    user_id = db.Column(db.String(80), db.ForeignKey("users.id"), nullable = False)
    user = db.relationship("UserModel", back_populates = "reviews")
    
    item_id = db.Column(db.String(80), db.ForeignKey("items.id"), nullable = False)
    item = db.relationship("ItemModel", back_populates = "reviews")