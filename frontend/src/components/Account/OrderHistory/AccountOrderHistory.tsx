import { useEffect } from 'react';
import { useAppDispatch, useStateSelector } from '../../../store';
import { fetchSelfOrders } from '../../../store/orderSlice';
import { UIAccountOrderHistory } from './UI/UIAccountOrderHistory';
import { AccountOrderItem } from './AccountOrderItem';

export const AccountOrderHistory = () => {
	const orders = useStateSelector((state) => state.order.orders);
	const dispatch = useAppDispatch();
	console.log(orders);
	useEffect(() => {
		dispatch(fetchSelfOrders({ includeItems: true }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<UIAccountOrderHistory>
			{orders.map((order) => (
				<AccountOrderItem order={order} key={order.id} />
			))}
		</UIAccountOrderHistory>
	);
};
