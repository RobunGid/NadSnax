import { useEffect } from 'react';
import { useParams } from 'react-router';
import ProductItem from '../ProductItem/ProductItem';
import { Item } from '../../types';
import { fetchItemsThunk, itemActions } from '../../store/itemSlice';

import { useActionCreators, useStateSelector } from '../../store';
import { ProductItemSkeletonLoader } from '../ProductItem/ProductItemSkeletonLoader';
import { NoResults } from '../layout/NoResults';

export const ProductsPage = () => {
	const items: Item[] = useStateSelector((state) => state.item.itemList);
	const status = useStateSelector((state) => state.item.status);

	const actions = useActionCreators({
		...itemActions,
		fetchItems: fetchItemsThunk,
	});

	const { category, type } = useParams();
	useEffect(() => {
		actions.fetchItems({
			include_category: true,
			include_type: true,
			include_images: true,
			category_name: category,
			type_name: type,
			is_bestseller: category === 'best-sellers' ? true : undefined,
			is_secretbox: category === 'secretboxes' ? true : undefined,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, type]);

	return (
		<main className='flex flex-wrap p-5 justify-center gap-4'>
			{items.map((item) => (
				<ProductItem key={item.id} item={item} />
			))}
			{status === 'loading' && (
				<>
					<ProductItemSkeletonLoader />
					<ProductItemSkeletonLoader />
					<ProductItemSkeletonLoader />
					<ProductItemSkeletonLoader />
					<ProductItemSkeletonLoader />
				</>
			)}
			{status !== 'loading' && !items.length && (
				<NoResults
					category={category}
					type={type}
					className='h-[calc(100vh-20rem)]'
				/>
			)}
		</main>
	);
};
