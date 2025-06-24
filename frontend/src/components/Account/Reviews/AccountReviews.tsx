import { useEffect } from 'react';
import { useAppDispatch, useStateSelector } from '../../../store';
import { ReviewElement } from '../../Layout/ReviewElement';
import { fetchSelfReviews } from '../../../store/reviewSlice';
import { ProductItem } from '../../ProductItem/ProductItem';

export const AccountReviews = () => {
	const reviews = useStateSelector((state) => state.review.reviews);
	const items = reviews.map((review) => review.item);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchSelfReviews({ includeUser: true, includeItem: true }));
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='flex gap-4 flex-wrap justify-center'>
			{reviews.map((review) => {
				const item = items.find((item) => item.id === review.itemId);
				return (
					<div key={review.id} className='flex flex-col items-center gap-4'>
						{item && <ProductItem item={item} hideAddButton hideInfo />}
						<ReviewElement review={review} />
					</div>
				);
			})}
		</div>
	);
};
