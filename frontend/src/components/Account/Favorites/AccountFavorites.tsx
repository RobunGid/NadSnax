import { useEffect } from 'react';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../../store';
import { ProductsList } from '../../Layout/ProductsList';
import { UIAccountFavorites } from './UI/UIAccountFavorites';
import { AccountFavoritesNoResults } from './AccountFavoritesNoResults';

export const AccountFavorites = () => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<UIAccountFavorites>
			{favoriteItems.length !== 0 ? (
				<ProductsList items={favoriteItems} params={fetchItemsParams} />
			) : (
				<AccountFavoritesNoResults />
			)}
		</UIAccountFavorites>
	);
};
