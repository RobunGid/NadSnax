from flask import Flask
from flask_smorest import Api
import os
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv


from db import db

from resources.user import blp as UserBlueprint
from resources.review import blp as ReviewBlueprint
from resources.category import blp as CategoryBlueprint
from resources.type import blp as TypeBlueprint
from resources.item import blp as ItemBlueprint
from resources.item_details import blp as ItemDetailsBlueprint
from resources.item_image import blp as ItemImageBlueprint
from resources.avatar import blp as AvatarBlueprint
from resources.image import blp as ImageBlueprint
from resources.favorite import blp as FavoriteBlueprint
from resources.orders import blp as OrderBlueprint

from datetime import timedelta

from blocklist import BLOCKLIST

def create_app(db_url = None):
    app = Flask(__name__)
 
    env = os.getenv('APP_ENV', 'dev')
    env_file = '.env' if env == 'prod' else '.env.local'
    load_dotenv(env_file, override=True)	
 
    migrate = Migrate(app, db)
    jwt = JWTManager(app)	
 
    @jwt.token_in_blocklist_loader
    def check_if_token_revoked(jwt_header, jwt_payload):
        return jwt_payload['jti'] in BLOCKLIST
    
    @jwt.unauthorized_loader
    def check_if_token_exists(error):
         return ({
        'message': 'Token is missing or invalid',
        'error': 'Unauthorized'
    }), 401
 
 
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    app.config["PROPOGATE_EXCEPTIONS"] = True
    app.config["API_TITLE"] = "NadSnax REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv('JWT_SECRET')
    app.config["JWT_TOKEN_LOCATION"] = ["headers", "cookies"]
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=5)
    app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)
    app.config["JWT_COOKIE_SECURE"] = True
    app.config["JWT_COOKIE_SAMESITE"] = "Strict"
    app.config["JWT_COOKIE_CSRF_PROTECT"] = False
    
    BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    AVATAR_UPLOAD_FOLDER = os.path.join(BASE_DIR, "resources/avatars")
    IMAGE_UPLOAD_FOLDER = os.path.join(BASE_DIR, "resources/images")
    app.config['AVATAR_UPLOAD_FOLDER'] = AVATAR_UPLOAD_FOLDER
    app.config['IMAGE_UPLOAD_FOLDER'] = IMAGE_UPLOAD_FOLDER
    app.config['ALLOWED_AVATAR_EXTENSIONS'] = {'png', 'jpeg', 'jpg'}
    app.config['MAX_AVATAR_SIZE'] = 1 * 1024 * 1024 # 1 Mb
    
    db_url = os.getenv("DATABASE_URL", 'sqlite:////tmp/test.db')

    if db_url is not None:
        app.config['SQLALCHEMY_DATABASE_URI'] = db_url
    else:
        app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
 
    db.init_app(app)

    api = Api(app)
 
    with app.app_context():
        db.create_all()

    api.register_blueprint(ItemImageBlueprint)
    api.register_blueprint(UserBlueprint)
    api.register_blueprint(ReviewBlueprint)
    api.register_blueprint(CategoryBlueprint)
    api.register_blueprint(TypeBlueprint)
    api.register_blueprint(ItemBlueprint)
    api.register_blueprint(ItemDetailsBlueprint)
    api.register_blueprint(AvatarBlueprint)
    api.register_blueprint(ImageBlueprint)
    api.register_blueprint(FavoriteBlueprint)
    api.register_blueprint(OrderBlueprint)
 
    return app

app = create_app()