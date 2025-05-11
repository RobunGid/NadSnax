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
			<div className='flex flex-row'>
				<ProductDetailsGallery images={item.images} />
				<ProductDetailsInfo item={item} />
			</div>
			<div className='flex flex-row gap-8'>
				<div className='flex flex-col gap-8'>
					{!hasOwnReview && user && (
						<ProductDetailsReviewForm itemId={item.id} />
					)}
					<ProductDetailsReviews reviews={item.reviews} userId={user?.id} />
				</div>
				<ProductDetailsSimillarItems item={item} itemList={itemList} />
			</div>
		</UIProductDetails>
	);
};
