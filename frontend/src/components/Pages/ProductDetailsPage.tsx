import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk, itemActions } from '../../store/itemSlice';
import { ProductDetailsImages } from '../ProductDetails/ProductDetailsImages';
import { cartActions, useActionCreators, useStateSelector } from '../../store';
import { ProductDetailsSimillarItems } from '../ProductDetails/ProductDetailsSimillarItems';
import { ProductDetailsInfo } from '../ProductDetails/ProductDetailsInfo';

export const ProductDetailsPage = () => {
	const { product: product_page_link } = useParams();

	const actions = useActionCreators({
		...itemActions,
		...cartActions,
		fetchItems: fetchItemsThunk,
	});

	const items = useStateSelector((state) => state.item.itemList);

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

	return !item ? (
		<div>Sorry, product not found</div>
	) : (
		item.itemDetails && (
			<div className='p-3 flex flex-row gap-10 pt-16 flex-wrap justify-center md:justify-start dark:text-gray-200'>
				<ProductDetailsImages className='md:ml-8' images={item.images} />
				<ProductDetailsInfo item={item} />
				<ProductDetailsSimillarItems item={item} itemList={items} />
			</div>
		)
	);
};
