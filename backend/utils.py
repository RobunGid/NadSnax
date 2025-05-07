from typing import List
from models.user import Role
from functools import wraps
from flask_jwt_extended import get_jwt_identity
from models import UserModel
from flask_smorest import abort
from flask import request

def role_required(roles: List[Role]):
	def decorator(fn):
		@wraps(fn)
		def wrapper(*args, **kwargs):
			identity = get_jwt_identity()
			user = UserModel.query.get_or_404(identity)
			if user.role.value not in roles:
				abort(403, message="You don't have permission to get all users data.")
			return fn(*args, **kwargs)
		return wrapper
	return decorator

def allowed_file(filename): 
    from app import app
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def content_type_required(content_types):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            content_type = request.content_type
            print(content_type)
            if content_type not in content_types:
                abort(400, message="Wrong body type")
            return fn(*args, **kwargs)
        return wrapper
    return decorator