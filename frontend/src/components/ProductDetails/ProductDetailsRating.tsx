import { RatingElement } from '../Layout/RatingElement';

interface ProductDetailsRatingProps {
	averageRating: number | null;
	ratingCount: number | null;
}

export const ProductDetailsRating = ({
	averageRating,
	ratingCount,
}: ProductDetailsRatingProps) => {
	return (
		<div className='flex'>
			<RatingElement rating={averageRating} className='flex text-yellow-500' />
			<div>{ratingCount}</div>
		</div>
	);
};
