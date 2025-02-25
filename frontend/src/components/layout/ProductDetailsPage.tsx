import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../store/itemSelectors';
import { useParams } from 'react-router';
import { fetchItems } from '../../store/itemSlice';
const ProductDetailsPage: FC = () => {
	const dispatch = useAppDispatch();

	const { product: product_page_link } = useParams();

	const items = useSelector(selectAllItems);

	const item = items.find((item) => item.pageLink == `/${product_page_link}`);

	const itemDetails = item?.itemDetails;

	useEffect(() => {
		dispatch(
			fetchItems({
				page_link: `/${product_page_link}`,
				include_item_details: true,
				include_category: true,
				include_type: true,
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product_page_link]);
	return (
		<>
			{!itemDetails && <div>Sorry, product not found</div>}
			{itemDetails && (
				<>
					<img src={item.imageUrl} alt={`${item.label} image`} />
					<div>{itemDetails.fullLabel}</div>
					<div>Description: {itemDetails.fullDescription}</div>
					<div>Ingridients: {itemDetails.ingridients}</div>
					<div>Nutrition: {itemDetails.nutrition}</div>
					<div>Supplier: {itemDetails.supplier}</div>
				</>
			)}
		</>
	);
};

export default ProductDetailsPage;
