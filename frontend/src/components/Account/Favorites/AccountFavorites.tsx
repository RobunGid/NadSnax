import { useEffect } from 'react';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../../store';
import { ProductsList } from '../../Layout/ProductsList';
import { UIAccountFavoritesNoResults } from './UI/UIAccountFavoritesNoResults';
import { UIAccountFavoritesContainer } from './UI/UIAccountFavoritesContainer';

export const AccountFavorites = () => {
	const items = useStateSelector((state) => state.item.items);
	const favoriteItems = items.filter((item) => item.favoriteId);

	const { fetchItems } = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	useEffect(() => {
		fetchItems({});
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
