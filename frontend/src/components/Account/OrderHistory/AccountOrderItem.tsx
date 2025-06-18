import { Link } from 'react-router';
import { Item } from '../../../types';
import { UIAccountOrderItem } from './UI/UIAccountOrderItem';
import { ProductItemImage } from '../../ProductItem/ProductItemImage';

interface AccountOrderItemProps {
	item: Item;
}

export const AccountOrderItem = ({ item }: AccountOrderItemProps) => {
	return (
		<Link to={item.pageLink}>
			<UIAccountOrderItem>
				<ProductItemImage
					imageURL={item.images[0].url}
					label={item.images[0].title}
					className='w-16 h-16'
				/>
				<div>{item.label}</div>
				<div>{item.itemDetails?.supplier}</div>
			</UIAccountOrderItem>
		</Link>
	);
};
