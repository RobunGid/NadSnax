import { RatingElement } from '../../Layout/RatingElement';

interface UIProductItemRatingProps {
	ratingCount: number | null;
	averageRating: number | null;
}

export const UIProductItemRating = ({
	ratingCount,
	averageRating,
}: UIProductItemRatingProps) => {
	return (
		<div className='flex justify-start items-center gap-x-1'>
			<RatingElement
				rating={averageRating}
				size='16'
				className='flex text-yellow-400'
			/>
			<span className='text-gray-400 text-[0.75rem]'>{averageRating || 0}</span>
			<span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
			<span className='text-gray-500 text-[0.75rem]'>
				{ratingCount} {ratingCount ? 'reviews' : 'No reviews'}
			</span>
		</div>
	);
};
