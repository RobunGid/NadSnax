import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk } from '../../store/itemSlice';
import { useActionCreators, useStateSelector } from '../../store';
import { UIproductDetailsLoader } from '../ProductDetails/UI/UIProductDetailsLoader';
import { ProductDetails } from '../ProductDetails/ProductDetails';
import { useI18n } from '../../i18n/i18n';

export const ProductDetailsPage = () => {
	const { product: product_page_link } = useParams();

	const actions = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const { lang } = useI18n();

	const { items, status } = useStateSelector((state) => state.item);

	const fetchedSimillars = useRef(false);

	useEffect(() => {
		fetchedSimillars.current = false;
		actions.fetchItems({
			pageLink: `/${product_page_link}`,
			accessToken,
			lang,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product_page_link, accessToken, lang]);

	const item = useMemo(
		() => items.find((item) => item.pageLink == `/${product_page_link}`),
		[items, product_page_link]
	);

	useEffect(() => {
		if (!item?.id || fetchedSimillars.current) return;
		actions.fetchItems({
			simillarId: item.id,
			accessToken,
			lang,
		});
		fetchedSimillars.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item?.id, accessToken, lang]);

	if (status === 'loading') return <UIproductDetailsLoader />;

	if (status === 'error') return <div>Sorry, item not found</div>;

	if (!item || !item.itemDetails) return null;

	const fullItem = { ...item, itemDetails: item.itemDetails };

	return <ProductDetails item={fullItem} simillarItems={items} />;
};
