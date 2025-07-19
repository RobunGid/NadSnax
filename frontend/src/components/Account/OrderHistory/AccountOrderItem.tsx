import { Link } from 'react-router';
import { OrderItem } from '../../../types';
import { UIAccountOrderItem } from './UI/UIAccountOrderItem';
import { ProductItemImage } from '../../ProductItem/ProductItemImage';
import { formatPrice } from '../../../logic/formatPrice';

interface AccountOrderItemProps {
	orderItem: OrderItem;
}

export const AccountOrderItem = ({ orderItem }: AccountOrderItemProps) => {
	const totalItemPrice = orderItem.quantity * orderItem.item.convertedPrice;
	const formattedTotalPrice = formatPrice(totalItemPrice);
	const formattedPrice = formatPrice(orderItem.item.convertedPrice);

	return (
		<Link to={orderItem.item.name}>
			<UIAccountOrderItem>
				<ProductItemImage
					imageURL={orderItem.item.images[0].url}
					label={orderItem.item.images[0].title}
					className='w-16 h-16'
				/>
				<div className='flex flex-col justify-center p-2'>
					<div>{orderItem.item.label}</div>
					<div className='text-sm text-gray-500'>
						{orderItem.item.itemDetails?.supplier}
					</div>
				</div>
				<div className='flex flex-col justify-center'>
					<div>{formattedTotalPrice}</div>
					<div className='text-sm text-gray-400'>
						{orderItem.quantity} x {formattedPrice}
					</div>
				</div>
			</UIAccountOrderItem>
		</Link>
	);
};
