import { formatOrderStatus } from '../../../logic/formatOrderStatus';
import { formatPrice } from '../../../logic/formatPrice';
import { formatReviewDate } from '../../../logic/formatReviewDate';
import { Order } from '../../../types';
import { UIAccountOrder } from './UI/UIAccountOrder';

interface AccountOrderProps {
	order: Order;
}

export const AccountOrder = ({ order }: AccountOrderProps) => {
	const totalPrice = order.items.reduce(
		(prev, cur) => prev + cur.item.price * cur.quantity,
		0
	);

	const totalCount = String(order.items.reduce((prev, cur) => prev + cur.quantity, 0));

	const formattedTotalPrice = formatPrice(totalPrice);
	const formatedCreatedAt = formatReviewDate(order.createdAt);
	const formattedOrderStatus = formatOrderStatus(order.status);

	return (
		<UIAccountOrder
			totalCount={totalCount}
			totalPrice={formattedTotalPrice}
			createdAt={formatedCreatedAt}
			orderStatus={formattedOrderStatus}
			order={order}
		/>
	);
};
