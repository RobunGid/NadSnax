import { FC, MouseEventHandler } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router';
import ProductRating from './ProductRating';
import { FiPlus } from 'react-icons/fi';

type ProductItemProps = Product & { pageLink: string };

const ProductItem: FC<ProductItemProps> = ({
	cost,
	image,
	imageAlt,
	label,
	rating,
	ratingCount,
	pageLink,
	description,
	id,
}) => {
	const handleAddProductToCart: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		console.log(id);
	};

	const productCost = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(cost);

	return (
		<Link to={pageLink}>
			<div>
				<img src={image} alt={imageAlt} width='240' />
				<div
					className='bg-orange-400 flex w-[75px] relative bottom-10 left-2 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
					onClick={handleAddProductToCart}
				>
					<FiPlus />
					<button>Add</button>
				</div>
				<div className='font-bold text-xl'>{productCost}</div>
				<div className='text-gray-500'>{description}</div>
				<div>{label}</div>
				<div className='flex justify-start'>
					<ProductRating rating={rating} size='16' className='flex' />
					<span className='text-gray-500 text-[0.75rem]'>{ratingCount}</span>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
