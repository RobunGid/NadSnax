import { GoStar, GoStarFill } from 'react-icons/go';
import { getRatingStar, RatingType } from '../../logic/getRatingStar';
import { IoMdStarHalf } from 'react-icons/io';

interface RatingElementProps {
	rating: number | null;
	className?: string;
	size?: string | number;
}

const ratingIcons = {
	[RatingType.Full]: GoStarFill,
	[RatingType.Half]: IoMdStarHalf,
	[RatingType.Empty]: GoStar,
};

export const RatingElement = ({ rating, className, size }: RatingElementProps) => {
	const fullRating = getRatingStar(rating);

	return (
		<div className={className}>
			{fullRating.map((rating, index) => {
				const Icon = ratingIcons[rating];
				return <Icon size={size} key={index} />;
			})}
		</div>
	);
};
