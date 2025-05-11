import { Review } from '../../types';
import { ReviewElement } from '../Layout/ReviewElement';
import { UIProductDetailsReviews } from './UI/UIProductDetailsReviews';
interface ProductDetailsReviewsProps {
	reviews: Review[];
	userId?: string;
}

export const ProductDetailsReviews = ({
	reviews,
	userId,
}: ProductDetailsReviewsProps) => {
	return (
		<UIProductDetailsReviews>
			{reviews.map((review) => (
				<ReviewElement
					review={review}
					key={review.id}
					displayControls={review.userId === userId}
				/>
			))}
		</UIProductDetailsReviews>
	);
};
