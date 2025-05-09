import { Review } from '../../types';
import { ReviewElement } from '../Layout/ReviewElement';
interface ProductDetailsReviewsProps {
	reviews: Review[];
}

export const ProductDetailsReviews = ({ reviews }: ProductDetailsReviewsProps) => {
	return reviews.map((review) => <ReviewElement review={review} key={review.id} />);
};
