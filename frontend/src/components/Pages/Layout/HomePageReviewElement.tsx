import { Review } from '../../../types';
import { ReviewElement } from '../../Layout/ReviewElement';

interface HomePageReviewElementProps {
	review: Review;
}

export const HomePageReviewElement = ({ review }: HomePageReviewElementProps) => {
	return <ReviewElement review={review} type='homePage' />;
};
