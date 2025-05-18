import { useEffect } from 'react';
import { useAppDispatch, useStateSelector } from '../../../store';
import { ReviewElement } from '../../Layout/ReviewElement';
import { fetchSelfReviews } from '../../../store/reviewSlice';

export const AccountReviews = () => {
	const reviews = useStateSelector((state) => state.review.reviews);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSelfReviews({ includeUser: true }));
	}, []);
	return (
		<div>
			{reviews.map((review) => (
				<ReviewElement review={review} key={review.id} />
			))}
		</div>
	);
};
