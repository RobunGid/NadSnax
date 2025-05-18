import { Item } from '../../types';
import { UIProductDetailsAddToFavorite } from './UI/UIProductDetailsAddToFavorite';
import { addFavoriteThunk, deleteFavoriteThunk, useAppDispatch } from '../../store';

interface ProductDetailsAddToFavoriteProps {
	item: Item;
}

export const ProductDetailsAddToFavorite = ({
	item,
}: ProductDetailsAddToFavoriteProps) => {
	const dispatch = useAppDispatch();

	return (
		<UIProductDetailsAddToFavorite
			onAddClick={() => dispatch(addFavoriteThunk({ itemId: item.id }))}
			onDeleteClick={() => {
				if (item.favoriteId) {
					dispatch(deleteFavoriteThunk({ favoriteId: item.favoriteId }));
				}
			}}
			isFavorite={!!item.favoriteId}
		/>
	);
};
