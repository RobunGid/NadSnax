import { FC } from 'react';
import { getRatingStar } from '../../logic/getRatingStar';
import clsx from 'clsx';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

interface ProductRatingProps {
	rating: number;
	className?: string;
}

const ProductRating: FC<ProductRatingProps> = ({ rating, className }) => {
	const ratingCount = getRatingStar(rating);

	return (
		<div className={clsx(className)}>
			{ratingCount.map((rating, index) => {
				switch (rating) {
					case 'full':
						return <IoMdStar key={index} />;
					case 'half':
						return <IoMdStarHalf key={index} />;
					case 'empty':
						return <IoMdStarOutline key={index} />;
				}
			})}
		</div>
	);
};

export default ProductRating;
