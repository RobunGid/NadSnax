import { useEffect } from 'react';
import { UIHomePage } from './UI/UIHomePage';
import { useActionCreators, useStateSelector } from '../../store';
import { fetchRandomReviews } from '../../store/reviewSlice';
import { useI18n } from '../../i18n/i18n';
import { HomePageReviewElement } from './Layout/HomePageReviewElement';
import { extendReviewsLen } from '../../logic/extendReviewsLen';

export const HomePage = () => {
	const reviews = useStateSelector((state) => state.review.reviews);

	const extendedReviews = extendReviewsLen(reviews);

	const reviewsElements = extendedReviews.map((review) => (
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
