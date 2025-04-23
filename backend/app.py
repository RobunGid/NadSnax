from flask import Flask
from flask_smorest import Api
import os
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

from db import db

from resources.user import blp as UserBlueprint
from resources.review import blp as ReviewBlueprint
from resources.category import blp as CategoryBlueprint
from resources.type import blp as TypeBlueprint
from resources.item import blp as ItemBlueprint
from resources.item_details import blp as ItemDetailsBlueprint
from resources.image import blp as ImageBlueprint


def create_app(db_url = None):
	app = Flask(__name__)
 
	migrate = Migrate(app, db)
 
	CORS(app, resources={r"/*": {"origins": "*"}})

	app.config["PROPOGATE_EXCEPTIONS"] = True
	app.config["API_TITLE"] = "NadSnax REST API"
	app.config["API_VERSION"] = "v1"
	app.config["OPENAPI_VERSION"] = "3.0.3"
	app.config["OPENAPI_URL_PREFIX"] = "/"
	app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
	app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
	app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
	app.config["JWT_SECRET_KEY"] = os.getenv('JWT_SECRET')
 
	jwt = JWTManager(app)	

	db_url = os.getenv("DATABASE_URL", 'sqlite:////tmp/test.db')

	if db_url is not None:
		app.config['SQLALCHEMY_DATABASE_URI'] = db_url
	else:
		app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
 
	db.init_app(app)

	api = Api(app)
 
	with app.app_context():
		db.create_all()

	api.register_blueprint(ImageBlueprint)
	api.register_blueprint(UserBlueprint)
	api.register_blueprint(ReviewBlueprint)
	api.register_blueprint(CategoryBlueprint)
	api.register_blueprint(TypeBlueprint)
	api.register_blueprint(ItemBlueprint)
	api.register_blueprint(ItemDetailsBlueprint)
 
	return app

app = create_app()