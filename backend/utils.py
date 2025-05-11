from typing import List
from models.user import Role
from functools import wraps
from flask_jwt_extended import get_jwt_identity
from models import UserModel
from flask_smorest import abort
from flask import request

def role_required(roles: List[Role], message=None):
	def decorator(fn):
		@wraps(fn)
		def wrapper(*args, **kwargs):
			identity = get_jwt_identity()
			user = UserModel.query.get_or_404(identity)
			if user.role.value not in roles:
				abort(403, message="You don't have permission to get users data" if not message else message)
			return fn(*args, **kwargs)
		return wrapper
	return decorator

def allowed_avatar_file(file): 
    from app import app
    file_size = len(file.read())
    file.seek(0)
    return '.' in file.filename and file.filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_AVATAR_EXTENSIONS'] and file_size <= app.config['MAX_AVATAR_SIZE']

def content_type_required(content_types):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            content_type = request.content_type
            if not any(item in content_type for item in content_types):
                abort(400, message="Wrong body type")
            return fn(*args, **kwargs)
        return wrapper
    return decorator