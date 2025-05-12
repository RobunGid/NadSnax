import { handleAddToFavorite, handleDeleteFromFavorite } from '../../api';
import { Item } from '../../types';
import { UIProductDetailsAddToFavorite } from './UI/UIProductDetailsAddToFavorite';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../store';

interface ProductDetailsAddToFavoriteProps {
	item: Item;
}

export const ProductDetailsAddToFavorite = ({
	item,
}: ProductDetailsAddToFavoriteProps) => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const actions = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	return (
		<UIProductDetailsAddToFavorite
			onAddClick={() =>
				handleAddToFavorite({
					accessToken,
					fetchItems: actions.fetchItems,
					itemId: item.id,
				})
			}
			onDeleteClick={() => {
				if (item.favoriteId) {
					handleDeleteFromFavorite({
						favoriteId: item.favoriteId,
						fetchItems: actions.fetchItems,
						accessToken,
						itemId: item.id,
					});
				}
			}}
			isFavorite={!!item.favoriteId}
		/>
	);
};
