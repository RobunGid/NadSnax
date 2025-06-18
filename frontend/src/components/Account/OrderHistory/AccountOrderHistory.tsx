import { useEffect } from 'react';
import { useAppDispatch, useStateSelector } from '../../../store';
import { fetchSelfOrders } from '../../../store/orderSlice';
import { UIAccountOrderHistory } from './UI/UIAccountOrderHistory';
import { AccountOrder } from './AccountOrder';

export const AccountOrderHistory = () => {
	const orders = useStateSelector((state) => state.order.orders);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSelfOrders({ includeItems: true }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<UIAccountOrderHistory>
			{orders.map((order) => (
				<AccountOrder order={order} key={order.id} />
			))}
		</UIAccountOrderHistory>
	);
};
