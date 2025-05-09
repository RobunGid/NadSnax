import { Review } from '../../types';
import { UIReview } from '../UI/UIReview';

interface ProductDetailsReviewsProps {
	reviews: Review[];
}

export const ProductDetailsReviews = ({ reviews }: ProductDetailsReviewsProps) => {
	return reviews.map((review) => <UIReview review={review} key={review.id} />);
};
