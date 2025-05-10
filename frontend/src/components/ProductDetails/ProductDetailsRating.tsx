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
		<div className='flex justify-start items-center gap-x-1'>
			<RatingElement rating={averageRating} className='flex text-yellow-400' />
			<span className='text-gray-400'>{averageRating || 0}</span>
			<span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
			<span className='text-gray-500'>
				{ratingCount} {ratingCount ? 'reviews' : 'No reviews'}
			</span>
		</div>
	);
};
