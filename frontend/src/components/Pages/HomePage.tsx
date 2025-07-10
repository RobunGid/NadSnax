import { useEffect } from 'react';
import { UIHomePage } from './UI/UIHomePage';
import { useActionCreators, useStateSelector } from '../../store';
import { fetchRandomReviews } from '../../store/reviewSlice';
import { useI18n } from '../../i18n/i18n';
import { HomePageReviewElement } from './Layout/HomePageReviewElement';

export const HomePage = () => {
	const REQUIRED_REVIEWS_LENGTH = 8;
	const reviews = useStateSelector((state) => state.review.reviews);
	const fixedReviews = [...reviews];
	if (reviews.length > 0) {
		while (fixedReviews.length < REQUIRED_REVIEWS_LENGTH) {
			fixedReviews.push(reviews[fixedReviews.length % reviews.length]);
		}
	}

	const reviewsElements = fixedReviews.map((review) => (
		<HomePageReviewElement review={review} key={review.id + Math.random()} />
	));

	const { lang } = useI18n();

	const { fetchReviews } = useActionCreators({
		fetchReviews: fetchRandomReviews,
	});

	useEffect(() => {
		fetchReviews({ lang, count: 5 });
	}, []);

	return <UIHomePage customerReviews={reviewsElements} />;
};
