import { FC } from 'react';
import { useParams } from 'react-router';
import { products } from '../../mock';
import ProductItem from '../ProductItem/ProductItem';
import { NoResults } from './NoResults';

export const ProductsPage: FC = () => {
	const { category, type } = useParams();

	let productsList;

	productsList = products;

	if (category) {
		productsList = productsList.filter((product) => {
			return product.category === category;
		});
	}
	if (category && type) {
		productsList = productsList.filter((product) => {
			return product.category === category && product.type === type;
		});
	}

	return (
		<main className='flex flex-wrap p-5 justify-center gap-4'>
			{productsList.map((product) => (
				<ProductItem
					ratingCount={product.ratingCount}
					key={product.id}
					id={product.id}
					description={product.description}
					category={product.category}
					price={product.price}
					image={product.image}
					imageAlt={product.label}
					label={product.label}
					rating={product.rating}
					type={product.type}
					pageLink={product.pageLink}
					oldPrice={product.oldPrice}
				/>
			))}
			{!productsList.length && <NoResults type={type} category={category} />}
		</main>
	);
};
