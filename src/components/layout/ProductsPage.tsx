import { FC } from 'react';
import { useParams } from 'react-router';

export const ProductsPage: FC = () => {
	const { category, product } = useParams();
	return (
		<div>
			Products page. Category: {category}
			Product: {product}
		</div>
	);
};
