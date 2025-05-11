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
	const ownReview = reviews.find((review) => review.userId === userId);
	return (
		<UIProductDetailsReviews>
			{!ownReview &&
				reviews.map((review) => (
					<ReviewElement review={review} key={review.id} />
				))}
			{ownReview && (
				<>
					<ReviewElement review={ownReview} displayControls />
					{reviews
						.filter((review) => review.userId != userId)
						.map((review) => (
							<ReviewElement review={review} key={review.id} />
						))}
				</>
			)}
		</UIProductDetailsReviews>
	);
};
