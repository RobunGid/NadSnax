import { Item } from '../../types';
import { ProductDetailsGallery } from './ProductDetailsGallery';
import { ProductDetailsInfo } from './ProductDetailsInfo';
import { ProductDetailsReviews } from './ProductDetailsReviews';
import { ProductDetailsSimillarItems } from './ProductDetailsSimillarItems';
import { UIProductDetails } from './UI/UIProductDetails';

interface ProductDetailsProps {
	item: Required<Pick<Item, 'itemDetails'>> & Item;
	itemList: Item[];
}

export const ProductDetails = ({ item, itemList }: ProductDetailsProps) => {
	return (
		<UIProductDetails>
			<ProductDetailsGallery images={item.images} />
			<ProductDetailsInfo item={item} />
			<ProductDetailsReviews reviews={item.reviews} />
			<ProductDetailsSimillarItems item={item} itemList={itemList} />
		</UIProductDetails>
	);
};
