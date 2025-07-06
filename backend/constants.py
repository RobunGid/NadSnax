from enum import Enum

class SupportedLanguages(Enum):
    en = "EN"
    ru = "RU"
    
class SupportedCurrencies(Enum):
    en = "USD"
    ru = "RUB"
    
class OrderStatus(Enum):
    processing = "processing"
    packing = "packing"
    shipping = "shipping"
    ready = "ready"
    success = "success"
    canceled = "canceled"
    returned = "returned"
    
    deleted = "deleted"
    
class Role(Enum):
    user = 'user'
    moderator = 'moderator'
    admin = 'admin'