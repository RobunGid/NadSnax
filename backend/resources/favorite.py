from flask_smorest import Blueprint
from flask.views import MethodView
from schemas import FavoriteSchema
from models import FavoriteModel
from uuid import uuid4
from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask_smorest import abort
from flask_jwt_extended import jwt_required, get_jwt_identity
from utils import role_required

blp = Blueprint("favorites", __name__, description="Operations on favorites")

@blp.route('/favorite')
class Favorites(MethodView):
    @blp.response(200, FavoriteSchema(many=True))
    @jwt_required()
    @role_required(["admin", "moderator"])
    def get(self):
        favorites = FavoriteModel.query.all()
        return favorites
    
    @blp.response(201, FavoriteSchema)
    @blp.arguments(FavoriteSchema)
    
    @jwt_required()
    def post(self, favorite_data):
        identity = get_jwt_identity()
        favorite = FavoriteModel(**favorite_data, id=str(uuid4()), user_id=identity)
        try:
            db.session.add(favorite)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occured while inserting the favorite")
            
        return favorite
    
@blp.route('/favorite/<string:favorite_id>')
class Favorite(MethodView):
    @blp.response(200, FavoriteSchema)
    @jwt_required(fresh=True)
    def get(self, favorite_id):
        identity = get_jwt_identity()
        favorite = FavoriteModel.query.get_or_404(favorite_id)
        if favorite.user_id != identity:
            abort(401, message='You can\'t get this favorite')
        return favorite
    
    @jwt_required()
    def delete(self, favorite_id):
        favorite = FavoriteModel.query.get_or_404(favorite_id)
        identity = get_jwt_identity()
        if favorite.user_id != identity:
            abort(401, message='You can\'t delete this favorite')
        db.session.delete(favorite)
        db.session.commit()
        return {"message": "Favorite deleted"}