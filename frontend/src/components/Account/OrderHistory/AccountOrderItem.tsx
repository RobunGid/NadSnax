import { Order } from '../../../types';
import { ProductItem } from '../../ProductItem/ProductItem';

interface AccountOrderItemProps {
	order: Order;
}

export const AccountOrderItem = ({ order }: AccountOrderItemProps) => {
	return (
		<div>
			{order.items.map((orderItem) => (
				<ProductItem item={orderItem.item} key={orderItem.id} />
			))}
		</div>
	);
};
