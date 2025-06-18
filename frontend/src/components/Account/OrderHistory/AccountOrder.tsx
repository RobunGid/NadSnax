import { formatReviewDate } from '../../../logic/formatReviewDate';
import { Order } from '../../../types';
import { AccountOrderItem } from './AccountOrderItem';

interface AccountOrderProps {
	order: Order;
}

export const AccountOrder = ({ order }: AccountOrderProps) => {
	const orderCreateDate = formatReviewDate(order.createdAt);
	return (
		<div className='flex'>
			{orderCreateDate}
			{order.items.map((orderItem) => (
				<AccountOrderItem item={orderItem.item} key={orderItem.id} />
			))}
		</div>
	);
};
