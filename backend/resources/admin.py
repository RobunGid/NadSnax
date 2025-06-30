from flask_smorest import Blueprint
from models import OrderModel, ItemModel, ReviewModel, UserModel
from models.order import OrderStatus
from flask.views import MethodView
from sqlalchemy import func

blp = Blueprint("admin", __name__, "Admin tools")

@blp.route('/admin/statistics')
class AdminStatistics(MethodView):
    def get(self):
        statistics = {}
        
        order_data = {}
        order_data["total_orders"] = OrderModel.query.count()
        order_data["processing_orders"] = OrderModel.query.filter_by(status=OrderStatus.processing).count()
        order_data["packing_orders"] = OrderModel.query.filter_by(status=OrderStatus.packing).count()
        order_data["shipping_orders"] = OrderModel.query.filter_by(status=OrderStatus.shipping).count()
        order_data["ready_orders"] = OrderModel.query.filter_by(status=OrderStatus.ready).count()
        order_data["success_orders"] = OrderModel.query.filter_by(status=OrderStatus.success).count()
        order_data["canceled_orders"] = OrderModel.query.filter_by(status=OrderStatus.canceled).count()
        order_data["returned_orders"] = OrderModel.query.filter_by(status=OrderStatus.returned).count()
        order_data["deleted_orders"] = OrderModel.query.filter_by(status=OrderStatus.deleted).count()
        statistics["order_data"] = order_data
        
        item_data = {}
        item_data["total_items"] = ItemModel.query.count()
        item_data["bestseller_items"] = ItemModel.query.filter_by(is_bestseller=True).count()
        item_data["secretbox_items"] = ItemModel.query.filter_by(is_secretbox=True).count()
        item_data["average_price"] = float(round(ItemModel.query.with_entities(func.avg(ItemModel.price)).scalar(), 2))
        statistics["item_data"] = item_data
        
        review_data = {}
        review_data["total_reviews"] = ReviewModel.query.count()
        review_data["average_rating"] = float(round(ReviewModel.query.with_entities(func.avg(ReviewModel.rating)).scalar(), 2))
        statistics["review_data"] = review_data
        
        user_data = {}
        user_data["total_users"] = UserModel.query.count()
        statistics["user_data"] = user_data
        
        return statistics