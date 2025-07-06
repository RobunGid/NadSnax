from constants import SupportedCurrencies
from datetime import timedelta
from datetime import datetime
import requests

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