import { ProductRating } from '../../Layout/ProductRating';

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
			<ProductRating rating={averageRating} className='flex text-yellow-500' />
			<div>{ratingCount}</div>
		</div>
	);
};
