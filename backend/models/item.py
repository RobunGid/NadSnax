from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.sql import func
from sqlalchemy import select

from db import db
import models

class ItemModel(db.Model):
    __tablename__ = "item"
    
    id = db.Column(db.String(80), primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    
    label = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    old_price = db.Column(db.Numeric(10, 2))
    description = db.Column(db.String(80))
    is_bestseller = db.Column(db.Boolean())
    is_secretbox = db.Column(db.Boolean())
    
    category_id = db.Column(db.String(80), db.ForeignKey("category.id"))
    type_id = db.Column(db.String(80), db.ForeignKey("type.id"))
    
    category = db.relationship("CategoryModel", back_populates="items", lazy=True)
    type = db.relationship("TypeModel", back_populates="items", lazy=True)
    reviews = db.relationship("ReviewModel", back_populates="item", lazy=True, cascade="all, delete")
    images = db.relationship("ItemImageModel", back_populates="item", lazy=True, cascade="all, delete")
    
    item_details = db.relationship("ItemDetailsModel", back_populates="item", uselist=False, cascade="all, delete")
    translations = db.relationship("ItemTranslationModel", back_populates="item", cascade="all, delete")
    
    @hybrid_property
    def average_rating(self): # type: ignore[reportRedeclaration]
        reviews = list(self.reviews) if self.reviews else []
        return sum(review.rating for review in reviews) / len(reviews) if self.reviews else 0

    @average_rating.expression
    def average_rating(cls):
        return select(func.coalesce(func.avg(models.ReviewModel.rating), 0)).where(models.ReviewModel.item_id == cls.id).scalar_subquery()
    
    @hybrid_property
    def rating_count(self): # type: ignore[reportRedeclaration]
        return len(list(review for review in self.reviews)) if self.reviews else 0

    @rating_count.expression
    def rating_count(cls):
        return db.select(func.count()).where(models.ReviewModel.item_id == cls.id).scalar_subquery()