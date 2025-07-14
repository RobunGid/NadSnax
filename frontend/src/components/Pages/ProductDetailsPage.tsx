import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk } from '../../store/itemSlice';
import { useActionCreators, useStateSelector } from '../../store';
import { UIproductDetailsLoader } from '../ProductDetails/UI/Loader/UIProductDetailsLoader';
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
	const [testLoading, setTestLoading] = useState(false);

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
		const handleClick = (event: KeyboardEvent) => {
			if (event.key == 'x') {
				setTestLoading((prev) => !prev);
			}
		};
		window.addEventListener('keydown', handleClick);
		return () => {
			window.removeEventListener('keydown', handleClick);
		};
	}, []);

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

	if (status === 'loading' || testLoading) return <UIproductDetailsLoader />;

	if (status === 'error') return <div>Sorry, item not found</div>;

	if (!item || !item.itemDetails) return null;

	const fullItem = { ...item, itemDetails: item.itemDetails };

	return <ProductDetails item={fullItem} simillarItems={items} />;
};
