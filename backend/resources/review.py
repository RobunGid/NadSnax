import uuid

from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import SQLAlchemyError
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request
from sqlalchemy import func

from db import db
from schemas import ReviewSchema, ReviewUpdateSchema, PlainReviewSchema
from models import ReviewModel

blp = Blueprint("reviews", __name__, description="Operations on reviews")

@blp.route('/review/<string:review_id>')
class Review(MethodView):
    @blp.response(200, ReviewSchema)
    def get(self, review_id):
        review = ReviewModel.query.get_or_404(review_id)
        return review
    
    @jwt_required()
    def delete(self, review_id):
        identity = get_jwt_identity()
        review = ReviewModel.query.get_or_404(review_id)
        if review.user_id != identity:
            abort(401, message='You can\'t delete this review')
        db.session.delete(review)
        db.session.commit()
        return {"message": "Review deleted"}

    @blp.response(200, ReviewSchema)        
    @blp.arguments(ReviewUpdateSchema)
    def put(self, review_data, review_id):
        review = ReviewModel.query.get(review_id)
        
        if review:
            review.text = review_data["text"]
            review.rating = review_data["rating"]
        else:
            review = ReviewModel(**review_data, id=review_id)
            
        db.session.add(review)
        db.session.commit()
        
        return review

@blp.route('/review/self')
class SelfReviews(MethodView):
    @jwt_required()
    @blp.response(200, ReviewSchema(many=True))
    def get(self):
        identity = get_jwt_identity()
        
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        query = ReviewModel.query
        
        query = query.filter_by(user_id=identity)
        
        query = query.offset(page*per_page).limit(per_page)
            
        reviews = query.all()
            
        return reviews
            
@blp.route('/review')
class Reviews(MethodView):
    @blp.response(200, ReviewSchema(many=True))
    def get(self):
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        is_random = str(request.args.get("random")).lower() == "true"
        
        query = ReviewModel.query
        if is_random:
            query = query.order_by(func.random())
        
        query = query.offset(page*per_page).limit(per_page)
        
        reviews = query.all()
        
        return reviews
       
    @blp.arguments(PlainReviewSchema)
    @blp.response(201, ReviewSchema)
    @jwt_required()
    def post(self, review_data):
        identity = get_jwt_identity()
        review = ReviewModel(**review_data, id=str(uuid.uuid4()), user_id=identity)
  
        try:
            db.session.add(review)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while inserting the review")
    
        return review