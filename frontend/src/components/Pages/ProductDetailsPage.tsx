import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk } from '../../store/itemSlice';
import { useActionCreators, useStateSelector } from '../../store';
import { UIproductDetailsLoader } from '../ProductDetails/UI/Loader/UIProductDetailsLoader';
import { ProductDetails } from '../ProductDetails/ProductDetails';

export const ProductDetailsPage = () => {
	const { product: product_page_link } = useParams();

	const actions = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { items, status } = useStateSelector((state) => state.item);

	const fetchedSimillars = useRef(false);

	useEffect(() => {
		fetchedSimillars.current = false;
		actions.fetchItems({
			includeItem_details: true,
			includeCategory: true,
			includeType: true,
			includeImages: true,
			includeReviews: true,
			includeReviewsUser: true,
			pageLink: `/${product_page_link}`,
			accessToken,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product_page_link, accessToken]);

	const item = useMemo(
		() => items.find((item) => item.pageLink == `/${product_page_link}`),
		[items, product_page_link]
	);

	useEffect(() => {
		if (!item?.id || fetchedSimillars.current) return;
		actions.fetchItems({
			includeItemDetails: true,
			includeReviews: true,
			includeReviewsUser: true,
			includeCategory: true,
			includeType: true,
			includeImages: true,
			simillarId: item.id,
			accessToken,
		});
		fetchedSimillars.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item?.id, accessToken]);

	if (status === 'loading') return <UIproductDetailsLoader />;

	if (status === 'error') return <div>Sorry, item not found</div>;

	if (!item || !item.itemDetails) return null;

	const fullItem = { ...item, itemDetails: item.itemDetails };

	return <ProductDetails item={fullItem} simillarItems={items} />;
};
