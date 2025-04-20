import { Item } from '../../types';
import { ProductDetailsGallery } from './ProductDetailsGallery';
import { ProductDetailsInfo } from './ProductDetailsInfo';
import { ProductDetailsSimillarItems } from './ProductDetailsSimillarItems';
import { UIProductDetails } from './UI/UIProductDetails';

interface ProductDetailsProps {
	item: Item;
	itemList: Item[];
}

export const ProductDetails = ({ item, itemList }: ProductDetailsProps) => {
	console.log(item, itemList);
	return (
		<UIProductDetails>
			<ProductDetailsGallery images={item.images} />
			<ProductDetailsInfo item={item} />
			<ProductDetailsSimillarItems item={item} itemList={itemList} />
		</UIProductDetails>
	);
};
