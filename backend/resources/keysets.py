import json
import os

from flask_smorest import Blueprint
from flask.views import MethodView

blp = Blueprint("keyset", __name__, "Key sets")

@blp.route('/keyset/<language>')
class Keysets(MethodView):
    def get(self, language):
        current_dir = os.path.dirname(os.path.abspath(__file__))
        keyset_path = os.path.join(current_dir, '..', 'keysets', f'{language}.json')
        with open(keyset_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            return data