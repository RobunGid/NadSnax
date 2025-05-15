import { useEffect } from 'react';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../../store';
import { ProductsList } from '../../Layout/ProductsList';

export const AccountFavourites = () => {
	const items = useStateSelector((state) => state.item.itemList);
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { fetchItems } = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	useEffect(() => {
		fetchItems({
			include_category: true,
			include_type: true,
			include_images: true,
			accessToken: accessToken,
		});
	}, []);

	return <ProductsList items={items} />;
};
