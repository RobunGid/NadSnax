from typing import List
from models.user import Role
from functools import wraps
from flask_jwt_extended import get_jwt_identity
from models import UserModel
from flask_smorest import abort
from flask import request
from constants import SupportedCurrencies
from datetime import timedelta
from datetime import datetime
import requests

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

class CurrencyConverter:
    __cached_currencies = {}
    __last_updated = None
    __TTL = timedelta(hours=4)
    
    @classmethod
    def get_rates(cls):
        if cls.__last_updated is None or datetime.now() - cls.__last_updated > cls.__TTL:
            response = requests.get("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
            cls.__cached_currencies = response.json().get("usd", {})
            cls.__last_updated = datetime.now()
        return cls.__cached_currencies
    
    @classmethod
    def convert(cls, count=100, from_currency=SupportedCurrencies.en, to_currency=SupportedCurrencies.ru):
        rates = cls.get_rates()
        from_rate = rates[from_currency.value.lower()]
        to_rate = rates[to_currency.value.lower()]
        converted_value = round(to_rate / from_rate * float(count), 2)
        return converted_value