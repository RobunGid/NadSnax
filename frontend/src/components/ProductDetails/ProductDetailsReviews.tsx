import { Review } from '../../types';
import { ReviewElement } from '../Layout/ReviewElement';
interface ProductDetailsReviewsProps {
	reviews: Review[];
	userId?: string;
}

export const ProductDetailsReviews = ({
	reviews,
	userId,
}: ProductDetailsReviewsProps) => {
	return reviews.map((review) => (
		<ReviewElement
			review={review}
			key={review.id}
			displayControls={review.userId === userId}
		/>
	));
};
