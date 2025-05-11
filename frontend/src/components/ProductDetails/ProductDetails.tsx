import { useStateSelector } from '../../store';
import { Item } from '../../types';
import { ProductDetailsGallery } from './ProductDetailsGallery';
import { ProductDetailsInfo } from './ProductDetailsInfo';
import { ProductDetailsReviewForm } from './ProductDetailsReviewForm';
import { ProductDetailsReviews } from './ProductDetailsReviews';
import { ProductDetailsSimillarItems } from './ProductDetailsSimillarItems';
import { UIProductDetails } from './UI/UIProductDetails';

interface ProductDetailsProps {
	item: Required<Pick<Item, 'itemDetails'>> & Item;
	itemList: Item[];
}

export const ProductDetails = ({ item, itemList }: ProductDetailsProps) => {
	const user = useStateSelector((state) => state.user.user);
	const hasOwnReview = item.reviews.find((review) => review.userId === user?.id);
	return (
		<UIProductDetails>
			<ProductDetailsGallery images={item.images} />
			<ProductDetailsInfo item={item} />
			{!hasOwnReview && user && <ProductDetailsReviewForm itemId={item.id} />}
			<ProductDetailsReviews reviews={item.reviews} userId={user?.id} />
			<ProductDetailsSimillarItems item={item} itemList={itemList} />
		</UIProductDetails>
	);
};
