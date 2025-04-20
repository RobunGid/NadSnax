import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Item } from '../../types';
import { fetchItemsThunk, itemActions } from '../../store/itemSlice';

import { useActionCreators, useStateSelector } from '../../store';
import { ProductsNoResults } from '../Products/ProductsNoResults';
import { ProductsList } from '../Layout/ProductsList';
import { ProductsLoading } from '../Products/ProductsLoading';

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
		<>
			<div className='flex flex-wrap p-5 justify-center gap-4'>
				{status === 'success' && <ProductsList items={items} />}
				{status === 'loading' && <ProductsLoading />}
			</div>
			{status !== 'loading' && !items.length && (
				<ProductsNoResults
					category={category}
					type={type}
					className='h-[calc(100vh-20rem)]'
				/>
			)}
		</>
	);
};
