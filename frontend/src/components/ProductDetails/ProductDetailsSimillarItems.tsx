import { Item } from '../../types';
import { ProductsList } from '../Layout/ProductsList';
import { UIProductDetailsSimillarItems } from './UI/UIProductDetailsSimillarItems';

interface ProductDetailsSimillarItemsProps {
	itemList: Item[];
}

export const ProductDetailsSimillarItems = ({
	itemList,
}: ProductDetailsSimillarItemsProps) => {
	return (
		itemList.length != 1 && (
			<UIProductDetailsSimillarItems>
				<ProductsList items={itemList} />
			</UIProductDetailsSimillarItems>
		)
	);
};
