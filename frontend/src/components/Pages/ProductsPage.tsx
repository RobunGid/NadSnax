import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk } from '../../store/itemSlice';

import { useActionCreators, useStateSelector } from '../../store';
import { ProductsList } from '../Layout/ProductsList';
import { ProductsLoading } from '../Layout/ProductsLoading';
import { UIProductsNoResults } from '../UI/UIProductsNoResults';
import { useI18n } from '../../i18n/i18n';

export const ProductsPage = () => {
	const items = useStateSelector((state) => state.item.items);
	const status = useStateSelector((state) => state.item.status);
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { lang } = useI18n();

	const { fetchItems } = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	const { category, type } = useParams();

	const fetchItemsParams = {
		categoryName: category,
		typeName: type,
		isBestseller: category === 'best-sellers' ? true : undefined,
		isSecretbox: category === 'secretboxes' ? true : undefined,
		accessToken: accessToken,
		lang,
	};

	useEffect(() => {
		fetchItems(fetchItemsParams);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, type, accessToken, lang]);
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
