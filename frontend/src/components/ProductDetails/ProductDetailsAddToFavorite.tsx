import { Axios } from '../../api';
import { Item } from '../../types';
import { UIProductDetailsAddToFavorite } from './UI/UIProductDetailsAddToFavorite';
import { useStateSelector } from '../../store';

interface ProductDetailsAddToFavoriteProps {
	item: Item;
}

export const ProductDetailsAddToFavorite = ({
	item,
}: ProductDetailsAddToFavoriteProps) => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);
	const handleAddToFavorite = () => {
		Axios.post(
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
	};

	return <UIProductDetailsAddToFavorite onClick={handleAddToFavorite} />;
};
