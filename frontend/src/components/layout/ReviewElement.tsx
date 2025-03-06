import { FC } from 'react';
import { Review } from '../../types';
import { ProductRating } from '../ProductItem/ProductRating';

type ReviewElementProps = { review: Review };

export const ReviewElement: FC<ReviewElementProps> = ({ review }) => {
	return (
		<li className='flex flex-col items-center w-60 gap-y-3 -mb-24'>
			<img
				src={review.user.avatarUrl}
				alt={`${review.user.name} Avatar`}
				className='w-20 rounded-full'
			/>
			<p>{review.user.name}</p>
			<ProductRating rating={review.rating} className='flex text-yellow-400' />
			<p className='text-sm text-center'>{review.text}</p>
			{/*item && (
				<ProductItem
					hideAddButton={true}
					product={item}
					className='scale-75 origin-top'
				/>
			)*/}
		</li>
	);
};
