import { formatPrice } from '../../../logic/formatPrice';
import { SiteStatistics } from '../../../types';
import { StatisticsOption } from './StatisticsOption';

interface StatisticsSectionProps {
	orderData: { orderData: SiteStatistics['orderData'] };
	itemData: { itemData: SiteStatistics['itemData'] };
	reviewData: { reviewData: SiteStatistics['reviewData'] };
}

export const StatisticsSection = {
	Orders: ({ orderData }: StatisticsSectionProps['orderData']) => {
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
	Items: ({ itemData }: StatisticsSectionProps['itemData']) => {
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
	Reviews: ({ reviewData }: StatisticsSectionProps['reviewData']) => {
		return (
			<>
				<StatisticsOption.Reviews.TotalReviews count={reviewData.totalReviews} />
				<StatisticsOption.Reviews.AverageRating
					count={reviewData.averageRating}
				/>
			</>
		);
	},
};
