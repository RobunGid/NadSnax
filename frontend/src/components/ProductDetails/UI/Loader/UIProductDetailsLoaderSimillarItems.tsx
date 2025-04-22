import { ProductItemSkeletonLoader } from '../../../ProductItem/ProductItemSkeletonLoader';

export const UIProductDetailsLoaderSimillarItems = () => {
	return (
		<div className='p-5'>
			<span className='text-2xl font-bold dark:text-gray-300'>
				Simillar items you might like
			</span>

			<div className='flex gap-4 py-3'>
				<ProductItemSkeletonLoader />
				<ProductItemSkeletonLoader />
				<ProductItemSkeletonLoader />
				<ProductItemSkeletonLoader />
			</div>
		</div>
	);
};
