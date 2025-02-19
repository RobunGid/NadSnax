import { FC } from 'react';
import { Review } from '../../types';
import ProductRating from '../ProductItem/ProductRating';

type ReviewElementProps = Omit<Review, 'id'>;

export const ReviewElement: FC<ReviewElementProps> = ({ user, rating, text }) => {
	return (
		<li className='flex flex-col items-center w-60 gap-y-3 -mb-24'>
			<img
				src={user.avatarUrl}
				alt={`${user.name} Avatar`}
				className='w-20 rounded-full'
			/>
			<p>{user.name}</p>
			<ProductRating rating={rating} className='flex text-yellow-400' />
			<p className='text-sm text-center'>{text}</p>
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
