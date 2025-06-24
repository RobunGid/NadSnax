from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import ReviewModel
from schemas import ReviewSchema, ReviewUpdateSchema, PlainReviewSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
import uuid
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request

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
    def get(self):
        identity = get_jwt_identity()
        
        include_user = request.args.get("include_user", default='false').lower() == 'true'
        include_item = request.args.get("include_item", default='false').lower() == 'true'
        
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        query = ReviewModel.query
        
        query = query.filter_by(user_id=identity)
        
        if include_user:
            query = query.options(db.joinedload(ReviewModel.user))
        
        if include_item:
            query = query.options(db.joinedload(ReviewModel.item))
            
        query = query.offset(page*per_page).limit(per_page)
            
        reviews = query.all()
            
        params = {
            "many": True,
            "include_item": include_item,
            "include_user": include_user
        }
        schema = ReviewSchema(**params)
            
        return schema.dump(reviews), 200
            
@blp.route('/review')
class Reviews(MethodView):
    def get(self):
        include_user = request.args.get("include_user", default='false').lower() == 'true'
        include_item = request.args.get("include_item", default='false').lower() == 'true'
        
        per_page = int(request.args.get("per_page")) if "per_page" in request.args and request.args.get("per_page").isdigit() else 10
        page = int(request.args.get("page")) if "page" in request.args and request.args.get("page").isdigit() else 0
        
        query = ReviewModel.query
        
        if include_user:
            query = query.options(db.joinedload(ReviewModel.user))
        
        if include_item:
            query = query.options(db.joinedload(ReviewModel.item))
            
        query = query.offset(page*per_page).limit(per_page)
        
        reviews = query.all()
        
        params = {
            "many": True,
            "include_item": include_item,
            "include_user": include_user
        }
        schema = ReviewSchema(**params)
            
        return schema.dump(reviews), 200
       
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