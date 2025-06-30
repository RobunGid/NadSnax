import { useEffect, useState } from 'react';
import { UIAdminStatisticsTitle } from './UI/UIAdminStatisticsTitle';
import { Axios } from '../../../api';
import { SiteStatistics } from '../../../types';
import camelcaseKeys from 'camelcase-keys';
import { UIAdminStatisticsSubtitle } from './UI/UIAdminStatisticsSubtitle';
import { StatisticsSection } from './StatisticsSection';

export const AdminStatistics = () => {
	const [siteStatistics, setSiteStatistics] = useState<SiteStatistics>({
		orderData: {
			totalOrders: 0,
			processingOrders: 0,
			packingOrders: 0,
			shippingOrders: 0,
			readyOrders: 0,
			successOrders: 0,
			canceledOrders: 0,
			returnedOrders: 0,
			deletedOrders: 0,
		},
		itemData: {
			averagePrice: 0,
			bestsellerItems: 0,
			secretboxItems: 0,
			totalItems: 0,
		},
	});

	const fetchStatistics = async () => {
		const fetchedSiteStatistics = (await Axios.get('/admin/statistics')).data;
		setSiteStatistics(camelcaseKeys(fetchedSiteStatistics, { deep: true }));
	};

	useEffect(() => {
		fetchStatistics();
	}, []);

	return (
		<div>
			<UIAdminStatisticsTitle>Site statistics</UIAdminStatisticsTitle>
			<div className='max-h-[650px] flex flex-col flex-wrap'>
				<UIAdminStatisticsSubtitle>Orders</UIAdminStatisticsSubtitle>
				<StatisticsSection.Orders orderData={siteStatistics.orderData} />
				<UIAdminStatisticsSubtitle>Items</UIAdminStatisticsSubtitle>
				<StatisticsSection.Items itemData={siteStatistics.itemData} />
			</div>
		</div>
	);
};
