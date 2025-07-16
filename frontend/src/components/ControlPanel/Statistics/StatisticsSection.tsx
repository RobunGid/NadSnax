import { useEffect, useState } from 'react';
import { UIAdminStatisticsTitle } from './UI/UIAdminStatisticsTitle';
import { Axios } from '../../../api';
import { SiteStatistics } from '../../../types';
import camelcaseKeys from 'camelcase-keys';
import { UIAdminStatisticsSubtitle } from './UI/UIAdminStatisticsSubtitle';
import { UIAdminStatisticsContainer } from './UI/UIAdminStatisticsContainer';
import { StatisticsItem } from './StatisticsItem';

export const StatisticsSection = () => {
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
		reviewData: {
			totalReviews: 0,
			averageRating: 0,
		},
		userData: {
			totalUsers: 0,
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
		<>
			<UIAdminStatisticsTitle>Site statistics</UIAdminStatisticsTitle>
			<UIAdminStatisticsContainer>
				<div>
					<UIAdminStatisticsSubtitle>Orders</UIAdminStatisticsSubtitle>
					<StatisticsItem.Orders orderData={siteStatistics.orderData} />
				</div>
				<div>
					<UIAdminStatisticsSubtitle>Items</UIAdminStatisticsSubtitle>
					<StatisticsItem.Items itemData={siteStatistics.itemData} />
				</div>
				<div>
					<UIAdminStatisticsSubtitle>Reviews</UIAdminStatisticsSubtitle>
					<StatisticsItem.Reviews reviewData={siteStatistics.reviewData} />
				</div>
				<div>
					<UIAdminStatisticsSubtitle>Users</UIAdminStatisticsSubtitle>
					<StatisticsItem.Users userData={siteStatistics.userData} />
				</div>
			</UIAdminStatisticsContainer>
		</>
	);
};
