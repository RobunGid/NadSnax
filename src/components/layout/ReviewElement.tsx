import { FC } from 'react';
import { Review } from '../../types';
import ProductRating from '../ProductItem/ProductRating';
import { products } from '../../mock';
import ProductItem from '../ProductItem/ProductItem';

type ReviewElementProps = Omit<Review, 'id'>;

export const ReviewElement: FC<ReviewElementProps> = ({
	name,
	rating,
	text,
	avatar,
	productId,
}) => {
	const product = products.find((product) => product.id === productId);

	return (
		<li className='flex flex-col items-center w-60 gap-y-3 -mb-24'>
			<img src={avatar} alt={`${name} Avatar`} className='w-20 rounded-full' />
			<p>{name}</p>
			<ProductRating rating={rating} className='flex text-yellow-400' />
			<p className='text-sm text-center'>{text}</p>
			{product && <ProductItem product={product} className='scale-75 origin-top' />}
		</li>
	);
};
