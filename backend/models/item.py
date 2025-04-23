from db import db
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.sql import func
import models

class ItemModel(db.Model):
    __tablename__ = "items"
    
    id = db.Column(db.String(80), primary_key = True)
    label = db.Column(db.String(80), nullable = False)
    price = db.Column(db.Float(precision = 2), nullable = False)
    old_price = db.Column(db.String(80))
    description = db.Column(db.String(80))
    is_bestseller = db.Column(db.Boolean())
    is_secretbox = db.Column(db.Boolean())
    page_link = db.Column(db.String(80), nullable = False, unique = True)
    
    category_id = db.Column(db.String(80), db.ForeignKey("categories.id"))
    type_id = db.Column(db.String(80), db.ForeignKey("types.id"))
    
    category = db.relationship("CategoryModel", back_populates = "items")
    type = db.relationship("TypeModel", back_populates = "items")
    reviews = db.relationship("ReviewModel", back_populates = "item")
    images = db.relationship("ImageModel", back_populates = "item", lazy = "select")
    
    item_details = db.relationship("ItemDetailsModel", back_populates = "item", uselist = False)
    
    @hybrid_property
    def average_rating(self):
        return sum(review.rating for review in self.reviews) / len(self.reviews) if self.reviews else None

    @average_rating.expression
    def average_rating(cls):
        return db.select(func.avg(models.ReviewModel.rating)).where(models.ReviewModel.item_id == cls.id).scalar_subquery()
    
    @hybrid_property
    def rating_count(self):
        return len(list(review for review in self.reviews)) if self.reviews else None

    @rating_count.expression
    def rating_count(cls):
        return db.select(func.count()).where(models.ReviewModel.item_id == cls.id).scalar_subquery()