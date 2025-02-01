import { FC } from 'react';
import { useParams } from 'react-router';
import { products } from '../../mock';
import ProductItem from './ProductItem';

export const ProductsPage: FC = () => {
	const { category, type } = useParams();
	const productsList = products.filter((product) => {
		return product.category === category && product.type === type;
	});
	return (
		<main className='flex flex-wrap p-5 justify-center gap-4 sm:justify-start'>
			{productsList.map((product) => (
				<ProductItem
					ratingCount={product.ratingCount}
					key={product.id}
					description={product.description}
					category={product.category}
					cost={product.cost}
					image={product.image}
					imageAlt={product.label}
					label={product.label}
					rating={product.rating}
					type={product.type}
					pageLink={product.pageLink}
				/>
			))}
		</main>
	);
};
