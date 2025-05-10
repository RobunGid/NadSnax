import { getRatingStar } from '../../logic/getRatingStar';
import clsx from 'clsx';
import { GoStar, GoStarFill } from 'react-icons/go';
import { IoMdStarHalf } from 'react-icons/io';

interface RatingElementProps {
	rating: number | null;
	className?: string;
	size?: string | number;
}

export const RatingElement = ({ rating, className, size }: RatingElementProps) => {
	const ratingCount = getRatingStar(rating);

	return (
		<div className={clsx(className)}>
			{ratingCount.map((rating, index) => {
				switch (rating) {
					case 'full':
						return <GoStarFill key={index} size={size} />;
					case 'half':
						return <IoMdStarHalf key={index} size={size} />;
					case 'empty':
						return <GoStar key={index} size={size} />;
				}
			})}
		</div>
	);
};
