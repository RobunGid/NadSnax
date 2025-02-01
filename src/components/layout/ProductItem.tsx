import { FC } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router';

type ProductItemProps = Omit<Product, 'id'> & { pageLink: string };

const ProductItem: FC<ProductItemProps> = ({
	cost,
	image,
	imageAlt,
	label,
	rating,
	ratingCount,
	pageLink,
	description,
}) => {
	const productCost = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(cost);

	return (
		<Link to={pageLink}>
			<div>
				<img src={image} alt={imageAlt} width='240' />
				<div className='font-bold text-xl'>{productCost}</div>
				<div className='text-gray-500'>{description}</div>
				<div>{label}</div>
				<div>
					{rating} {ratingCount}
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
