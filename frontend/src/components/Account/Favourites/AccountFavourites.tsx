import { useEffect } from 'react';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../../store';
import { ProductsList } from '../../Layout/ProductsList';

export const AccountFavourites = () => {
	const items = useStateSelector((state) => state.item.itemList);
	const favoriteItems = items.filter((item) => item.favoriteId);
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { fetchItems } = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	const fetchItemsParams = {
		include_category: true,
		include_type: true,
		include_images: true,
		accessToken: accessToken,
	};

	useEffect(() => {
		fetchItems(fetchItemsParams);
	}, []);

	return <ProductsList items={favoriteItems} params={fetchItemsParams} />;
};
