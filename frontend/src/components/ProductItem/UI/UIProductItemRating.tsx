import { ProductRating } from '../../Layout/ProductRating';

interface UIProductItemRatingProps {
	ratingCount: number | null;
	averageRating: number | null;
}

export const UIProductItemRating = ({
	ratingCount,
	averageRating,
}: UIProductItemRatingProps) => {
	return (
		<div className='flex justify-start'>
			<ProductRating
				rating={averageRating}
				size='16'
				className='flex text-yellow-400'
			/>
			<span className='text-gray-500 text-[0.75rem]'>{ratingCount || 0}</span>
		</div>
	);
};
