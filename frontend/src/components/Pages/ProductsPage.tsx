import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import ProductItem from '../ProductItem/ProductItem';
import { NoResults } from '../layout/NoResults';
import { Item } from '../../types';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../store/itemSelectors';
import { useAppDispatch } from '../../store';
import { fetchItems } from '../../store/itemSlice';

export const ProductsPage: FC = () => {
	const dispatch = useAppDispatch();

	const items: Item[] = useSelector(selectAllItems);

	const { category, type } = useParams();
	useEffect(() => {
		dispatch(
			fetchItems({
				include_category: true,
				include_type: true,
				include_images: true,
				category_name: category,
				type_name: type,
				is_bestseller: category === 'best-sellers' ? true : undefined,
				is_secretbox: category === 'secretboxes' ? true : undefined,
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, type]);

	return (
		<main className='flex flex-wrap p-5 justify-center gap-4 min-h-[calc(100vh-4.54em)]'>
			{items.map((item) => (
				<ProductItem key={item.id} item={item} />
			))}
			{!items.length && <NoResults type={type} category={category} />}
		</main>
	);
};
