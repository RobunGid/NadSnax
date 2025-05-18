import { handleAddToFavorite, handleDeleteItemFromFavorite } from '../../api';
import { Item } from '../../types';
import { UIProductDetailsAddToFavorite } from './UI/UIProductDetailsAddToFavorite';
import { itemActions, useAppDispatch, useStateSelector } from '../../store';

interface ProductDetailsAddToFavoriteProps {
	item: Item;
}

export const ProductDetailsAddToFavorite = ({
	item,
}: ProductDetailsAddToFavoriteProps) => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { addItemToFavorite, deleteItemFromFavorite } = itemActions;

	const dispatch = useAppDispatch();

	return (
		<UIProductDetailsAddToFavorite
			onAddClick={() =>
				handleAddToFavorite({
					accessToken,
					itemId: item.id,
					dispatch,
					addItemToFavorite,
				})
			}
			onDeleteClick={() => {
				if (item.favoriteId) {
					handleDeleteItemFromFavorite({
						favoriteId: item.favoriteId,
						accessToken,
						deleteItemFromFavorite,
						dispatch,
					});
				}
			}}
			isFavorite={!!item.favoriteId}
		/>
	);
};
