from db import db
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.sql import func
from sqlalchemy import select
import models
from sqlalchemy.orm import relationship

class ItemModel(db.Model):
    __tablename__ = "items"
    
    id = db.Column(db.String(80), primary_key=True)
    label = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    old_price = db.Column(db.String(80))
    description = db.Column(db.String(80))
    is_bestseller = db.Column(db.Boolean())
    is_secretbox = db.Column(db.Boolean())
    page_link = db.Column(db.String(80), nullable=False, unique=True)
    
    category_id = db.Column(db.String(80), db.ForeignKey("categories.id"))
    type_id = db.Column(db.String(80), db.ForeignKey("types.id"))
    
    category = db.relationship("CategoryModel", back_populates="items")
    type = db.relationship("TypeModel", back_populates="items")
    reviews = db.relationship("ReviewModel", back_populates="item")
    images = db.relationship("ItemImageModel", back_populates="item")
    
    item_details = db.relationship("ItemDetailsModel", back_populates="item", uselist=False)
    translations = db.relationship("ItemTranslationModel", back_populates="item")
    
    @hybrid_property
    def average_rating(self):
        return sum(review.rating for review in self.reviews) / len(self.reviews) if self.reviews else 0

    @average_rating.expression
    def average_rating(cls):
        return select(func.coalesce(func.avg(models.ReviewModel.rating), 0)).where(models.ReviewModel.item_id == cls.id).scalar_subquery()
    
    @hybrid_property
    def rating_count(self):
        return len(list(review for review in self.reviews)) if self.reviews else 0

    @rating_count.expression
    def rating_count(cls):
        return db.select(func.count()).where(models.ReviewModel.item_id == cls.id).scalar_subquery()