import { Axios } from '../../api';
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

	const handleAddToFavorite = async () => {
		const response = await Axios.post(
			'/favorite',
			{
				item_id: item.id,
			},
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		if (response.status === 201) {
			actions.fetchItems({
				include_item_details: true,
				include_reviews: true,
				include_category: true,
				include_type: true,
				include_images: true,
				simillar_id: item.id,
				accessToken,
			});
		}
	};

	const handleDeleteFromFavorite = async (favoriteId: string) => {
		const response = await Axios.delete(`/favorite/${favoriteId}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (response.status === 200) {
			actions.fetchItems({
				include_item_details: true,
				include_reviews: true,
				include_category: true,
				include_type: true,
				include_images: true,
				simillar_id: item.id,
				accessToken,
			});
		}
	};

	return (
		<UIProductDetailsAddToFavorite
			onAddClick={handleAddToFavorite}
			onDeleteClick={() => {
				if (item.favoriteId) handleDeleteFromFavorite(item.favoriteId);
			}}
			isFavorite={!!item.favoriteId}
		/>
	);
};
