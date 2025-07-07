import { useEffect } from 'react';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../../store';
import { ProductsList } from '../../Layout/ProductsList';
import { UIAccountFavoritesNoResults } from './UI/UIAccountFavoritesNoResults';
import { UIAccountFavoritesContainer } from './UI/UIAccountFavoritesContainer';

export const AccountFavorites = () => {
	const items = useStateSelector((state) => state.item.items);
	const favoriteItems = items.filter((item) => item.favoriteId);
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { fetchItems } = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	const fetchItemsParams = {
		includeCategory: true,
		includeType: true,
		includeImages: true,
		includeFavorite: true,
		accessToken: accessToken,
	};

	useEffect(() => {
		fetchItems(fetchItemsParams);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<UIAccountFavoritesContainer>
			{favoriteItems.length !== 0 ? (
				<ProductsList items={favoriteItems} />
			) : (
				<UIAccountFavoritesNoResults />
			)}
		</UIAccountFavoritesContainer>
	);
};
