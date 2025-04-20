import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk, itemActions } from '../../store/itemSlice';
import { cartActions, useActionCreators, useStateSelector } from '../../store';
import { UIproductDetailsLoader } from '../ProductDetails/UI/UIProductDetailsLoader';
import { ProductDetails } from '../ProductDetails/ProductDetails';

export const ProductDetailsPage = () => {
	const { product: product_page_link } = useParams();

	const actions = useActionCreators({
		...itemActions,
		...cartActions,
		fetchItems: fetchItemsThunk,
	});

	const items = useStateSelector((state) => state.item.itemList);

	const status = useStateSelector((state) => state.item.status);

	const fetchedSimillars = useRef(false);

	useEffect(() => {
		fetchedSimillars.current = false;
		actions.fetchItems({
			include_item_details: true,
			include_category: true,
			include_type: true,
			include_images: true,
			page_link: `/${product_page_link}`,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product_page_link]);

	const item = items.find((item) => item.pageLink == `/${product_page_link}`);

	useEffect(() => {
		if (!item?.id || fetchedSimillars.current) return;
		actions.fetchItems({
			include_item_details: true,
			include_category: true,
			include_type: true,
			include_images: true,
			simillar_id: item.id,
		});
		fetchedSimillars.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item?.id]);

	if (status === 'loading') return <UIproductDetailsLoader />;

	if (status === 'error' || !item) return <div>Sorry, product not found</div>;

	if (status === 'success' && item)
		return <ProductDetails item={item} itemList={items} />;
};
