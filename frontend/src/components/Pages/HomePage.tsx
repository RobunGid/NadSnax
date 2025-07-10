import { useEffect } from 'react';
import { UIHomePage } from './UI/UIHomePage';
import { useActionCreators, useStateSelector } from '../../store';
import { fetchRandomReviews } from '../../store/reviewSlice';
import { useI18n } from '../../i18n/i18n';
import { ReviewElement } from '../Layout/ReviewElement';

export const HomePage = () => {
	const reviews = useStateSelector((state) => state.review.reviews);
	const reviewsElements = reviews.map((review) => <ReviewElement review={review} />);
	const { lang } = useI18n();

	const { fetchReviews } = useActionCreators({
		fetchReviews: fetchRandomReviews,
	});

	useEffect(() => {
		fetchReviews({ lang, count: 5 });
	}, []);

	return <UIHomePage customerReviews={reviewsElements} />;
};
