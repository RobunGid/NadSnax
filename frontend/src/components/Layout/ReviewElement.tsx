import { Review } from '../../types';
import { UIReviewElement } from '../UI/UIReviewElement';

interface ReviewProps {
	review: Review;
}

export const ReviewElement = ({ review }: ReviewProps) => {
	return <UIReviewElement review={review} />;
};
