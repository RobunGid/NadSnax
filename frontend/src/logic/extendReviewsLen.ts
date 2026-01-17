import { Review } from '../types';
const REQUIRED_REVIEWS_LENGTH = 8;

export const extendReviewsLen = (reviews: Review[]) => {
	if (!reviews[0]) return [];
	const fixedReviews = [...reviews];
	if (reviews.length > 0) {
		while (fixedReviews.length < REQUIRED_REVIEWS_LENGTH) {
			fixedReviews.push(
				reviews[fixedReviews.length % reviews.length] || reviews[0]
			);
		}
	}
	return fixedReviews;
};
