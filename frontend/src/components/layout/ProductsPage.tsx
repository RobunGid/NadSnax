import { FC } from 'react';
import { useParams } from 'react-router';
import ProductItem from '../ProductItem/ProductItem';
import { NoResults } from './NoResults';
import { Item } from '../../types';

export const ProductsPage: FC = () => {
	const items: Item[] = [];
	const { category, type } = useParams();

	return (
		<main className='flex flex-wrap p-5 justify-center gap-4'>
			{items.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
			{!items.length && <NoResults type={type} category={category} />}
		</main>
	);
};
