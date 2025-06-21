import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk } from '../../store/itemSlice';

import { useActionCreators, useStateSelector } from '../../store';
import { ProductsList } from '../Layout/ProductsList';
import { ProductsLoading } from '../Products/ProductsLoading';
import { UIProductsNoResults } from '../UI/UIProductsNoResults';

export const ProductsPage = () => {
	const items = useStateSelector((state) => state.item.itemList);
	const status = useStateSelector((state) => state.item.status);
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { fetchItems } = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	const { category, type } = useParams();

	const fetchItemsParams = {
		include_category: true,
		include_type: true,
		include_images: true,
		category_name: category,
		type_name: type,
		is_bestseller: category === 'best-sellers' ? true : undefined,
		is_secretbox: category === 'secretboxes' ? true : undefined,
		accessToken: accessToken,
	};

	useEffect(() => {
		fetchItems(fetchItemsParams);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, type, accessToken]);
	return (
		<>
			<div className='flex flex-wrap p-5 justify-center gap-4'>
				{status === 'success' && <ProductsList items={items} />}
				{status === 'loading' && <ProductsLoading />}
			</div>
			{status !== 'loading' && !items.length && (
				<UIProductsNoResults
					category={category}
					type={type}
					className='h-[calc(100vh-20rem)]'
				/>
			)}
		</>
	);
};
