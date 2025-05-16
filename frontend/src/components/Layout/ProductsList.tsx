import { fetchItemsParams } from '../../store';
import { Item } from '../../types';
import { ProductItem } from '../ProductItem/ProductItem';

interface ProductsListProps {
	items: Item[];
	className?: string;
	params: fetchItemsParams;
}

export const ProductsList = ({ items, className, params }: ProductsListProps) => {
	return items.map((item) => (
		<ProductItem className={className} key={item.id} item={item} params={params} />
	));
};
