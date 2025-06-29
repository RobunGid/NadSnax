import { SiteStatistics } from '../../../types';
import { StatisticsOption } from './StatisticsOption';

interface StatisticsSectionProps {
	orderData: SiteStatistics['orderData'];
}

export const StatisticsSection = {
	Orders: ({ orderData }: StatisticsSectionProps) => {
		return (
			<>
				<StatisticsOption.TotalOrders count={orderData.totalOrders} />
				<StatisticsOption.ProcessingOrders count={orderData.processingOrders} />
				<StatisticsOption.PackingOrders count={orderData.packingOrders} />
				<StatisticsOption.ShippingOrders count={orderData.shippingOrders} />
				<StatisticsOption.ReadyOrders count={orderData.readyOrders} />
				<StatisticsOption.SuccessOrders count={orderData.successOrders} />
				<StatisticsOption.CanceledOrders count={orderData.canceledOrders} />
				<StatisticsOption.ReturnedOrders count={orderData.returnedOrders} />
				<StatisticsOption.DeletedOrders count={orderData.deletedOrders} />
			</>
		);
	},
};
