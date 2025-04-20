import { Item } from '../../types';
import { ProductItem } from '../ProductItem/ProductItem';

interface ProductsListProps {
	items: Item[];
	className?: string;
}

export const ProductsList = ({ items, className }: ProductsListProps) => {
	return items.map((item) => (
		<ProductItem className={className} key={item.id} item={item} />
	));
};
