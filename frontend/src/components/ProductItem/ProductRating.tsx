import { getRatingStar } from '../../logic/getRatingStar';
import clsx from 'clsx';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

interface ProductRatingProps {
	rating: number;
	className?: string;
	size?: string | number;
}

export const ProductRating = ({ rating, className, size }: ProductRatingProps) => {
	const ratingCount = getRatingStar(rating);

	return (
		<div className={clsx(className)}>
			{ratingCount.map((rating, index) => {
				switch (rating) {
					case 'full':
						return <IoMdStar key={index} size={size} />;
					case 'half':
						return <IoMdStarHalf key={index} size={size} />;
					case 'empty':
						return <IoMdStarOutline key={index} size={size} />;
				}
			})}
		</div>
	);
};
