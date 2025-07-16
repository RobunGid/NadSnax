import { formatPrice } from '../../../logic/formatPrice';
import { SiteStatistics } from '../../../types';
import { StatisticsOption } from './StatisticsOption';

interface StatisticsItemProps {
	orderData: { orderData: SiteStatistics['orderData'] };
	itemData: { itemData: SiteStatistics['itemData'] };
	reviewData: { reviewData: SiteStatistics['reviewData'] };
	userData: { userData: SiteStatistics['userData'] };
}

export const StatisticsItem = {
	Orders: ({ orderData }: StatisticsItemProps['orderData']) => {
		return (
			<>
				<StatisticsOption.Orders.TotalOrders count={orderData.totalOrders} />
				<StatisticsOption.Orders.ProcessingOrders
					count={orderData.processingOrders}
				/>
				<StatisticsOption.Orders.PackingOrders count={orderData.packingOrders} />
				<StatisticsOption.Orders.ShippingOrders
					count={orderData.shippingOrders}
				/>
				<StatisticsOption.Orders.ReadyOrders count={orderData.readyOrders} />
				<StatisticsOption.Orders.SuccessOrders count={orderData.successOrders} />
				<StatisticsOption.Orders.CanceledOrders
					count={orderData.canceledOrders}
				/>
				<StatisticsOption.Orders.ReturnedOrders
					count={orderData.returnedOrders}
				/>
				<StatisticsOption.Orders.DeletedOrders count={orderData.deletedOrders} />
			</>
		);
	},
	Items: ({ itemData }: StatisticsItemProps['itemData']) => {
		const formattedAveragePrice = formatPrice(itemData.averagePrice);
		return (
			<>
				<StatisticsOption.Items.TotalItems count={itemData.totalItems} />
				<StatisticsOption.Items.AveragePrice price={formattedAveragePrice} />
				<StatisticsOption.Items.BestsellerItems
					count={itemData.bestsellerItems}
				/>
				<StatisticsOption.Items.SecretboxItems count={itemData.secretboxItems} />
			</>
		);
	},
	Reviews: ({ reviewData }: StatisticsItemProps['reviewData']) => {
		return (
			<>
				<StatisticsOption.Reviews.TotalReviews count={reviewData.totalReviews} />
				<StatisticsOption.Reviews.AverageRating
					count={reviewData.averageRating}
				/>
			</>
		);
	},
	Users: ({ userData }: StatisticsItemProps['userData']) => {
		return (
			<>
				<StatisticsOption.Users.TotalUsers count={userData.totalUsers} />
			</>
		);
	},
};
