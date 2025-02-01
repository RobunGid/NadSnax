import { FC } from 'react';
import { getRatingStar } from '../../logic/getRatingStar';
import clsx from 'clsx';

interface ProductRatingProps {
	rating: number;
	className?: string;
}

const ProductRating: FC<ProductRatingProps> = ({ rating, className }) => {
	const productRatingStar = getRatingStar(rating);

	return <div className={clsx(className)}>{productRatingStar}</div>;
};

export default ProductRating;
