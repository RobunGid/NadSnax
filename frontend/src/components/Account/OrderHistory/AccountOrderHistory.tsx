import { useEffect } from 'react';
import { useAppDispatch, useStateSelector } from '../../../store';
import { fetchSelfOrders } from '../../../store/orderSlice';
import { UIAccountOrderHistory } from './UI/UIAccountOrderHistory';
import { AccountOrder } from './AccountOrder';
import { useI18n } from '../../../i18n/i18n';

export const AccountOrderHistory = () => {
	const orders = useStateSelector((state) => state.order.orders);

	const dispatch = useAppDispatch();

	const { lang } = useI18n();

	useEffect(() => {
		dispatch(fetchSelfOrders({ lang }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang]);
	return (
		<UIAccountOrderHistory>
			{orders.map((order) => (
				<AccountOrder order={order} key={order.id} />
			))}
		</UIAccountOrderHistory>
	);
};
