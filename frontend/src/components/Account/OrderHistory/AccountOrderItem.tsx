import { formatReviewDate } from '../../../logic/formatReviewDate';
import { Order } from '../../../types';
import { ProductItem } from '../../ProductItem/ProductItem';

interface AccountOrderItemProps {
	order: Order;
}

export const AccountOrderItem = ({ order }: AccountOrderItemProps) => {
	const orderCreateDate = formatReviewDate(order.createdAt);
	return (
		<div className='flex border-1'>
			{orderCreateDate}
			{order.items.map((orderItem) => (
				<ProductItem item={orderItem.item} key={orderItem.id} hideAddButton />
			))}
		</div>
	);
};
