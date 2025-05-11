from flask.views import MethodView
from flask_smorest import Blueprint, abort
from models import ReviewModel
from schemas import ReviewSchema, ReviewUpdateSchema, PlainReviewSchema
from db import db
from sqlalchemy.exc import SQLAlchemyError
import uuid
from flask_jwt_extended import jwt_required, get_jwt_identity

blp = Blueprint("reviews", __name__, description = "Operations on reviews")

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
            review = ReviewModel(**review_data, id = review_id)
            
        db.session.add(review)
        db.session.commit()
        
        return review

@blp.route('/review')
class Reviews(MethodView):
    @blp.response(200, ReviewSchema(many = True))
    def get(self):
        return ReviewModel.query.all()
       
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
            abort(500, message = "An error occured while inserting the review")
    
        return review