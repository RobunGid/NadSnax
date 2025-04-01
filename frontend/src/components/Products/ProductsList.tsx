import { Item } from '../../types';
import { ProductItem } from '../ProductItem/ProductItem';

interface ProductsListProps {
	items: Item[];
}

export const ProductsList = ({ items }: ProductsListProps) => {
	return items.map((item) => <ProductItem key={item.id} item={item} />);
};
