import { FC, MouseEventHandler } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router';
import ProductRating from './ProductRating';
import { FiPlus } from 'react-icons/fi';

type ProductItemProps = Product & { pageLink: string };

const ProductItem: FC<ProductItemProps> = ({
	price,
	image,
	imageAlt,
	label,
	rating,
	ratingCount,
	pageLink,
	description,
	id,
	oldPrice,
}) => {
	const handleAddProductToCart: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		console.log(id);
	};

	const productPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(price);

	const productOldPrice =
		oldPrice &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(oldPrice);

	return (
		<Link to={pageLink}>
			<div>
				<img
					src={image}
					alt={imageAlt}
					className='object-cover w-[240px] h-[240px]'
				/>
				<div
					className='bg-orange-400 flex w-[75px] absolute translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
					onClick={handleAddProductToCart}
				>
					<FiPlus />
					<button>Add</button>
				</div>
				<div className='flex gap-x-2 items-center'>
					{productOldPrice ? (
						<>
							<div className='font-bold text-xl text-lime-600'>
								Now {productPrice}
							</div>
							<div className='font-bold text-md text-gray-500 line-through'>
								{productOldPrice}
							</div>
						</>
					) : (
						<div className='font-bold text-xl'>{productPrice}</div>
					)}
				</div>
				<div className='text-gray-500 text-ellipsis text-nowrap w-60 overflow-hidden'>
					{description}
				</div>
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
