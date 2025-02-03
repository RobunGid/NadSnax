import { FC, MouseEventHandler } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router';
import ProductRating from './ProductRating';
import { FiPlus } from 'react-icons/fi';
import { GiStarFormation } from 'react-icons/gi';
import { useAppDispatch } from '../../store';
import { addProductToCart } from '../../store/cartSlice';

type ProductItemProps = {
	product: Product;
	className?: string;
	count?: number;
};

const ProductItem: FC<ProductItemProps> = ({ product, className, count }) => {
	const dispatch = useAppDispatch();
	const {
		price,
		image,
		imageAlt,
		label,
		rating,
		ratingCount,
		pageLink,
		description,
		oldPrice,
		isBestseller,
		category,
	} = product;

	const handleAddProductToCart: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		dispatch(addProductToCart(product));
	};

	const productPrice =
		price &&
		new Intl.NumberFormat('en-US', {
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
		<Link to={pageLink} className={className}>
			<div className='relative z-0 overflow-hidden'>
				{isBestseller && (
					<div className='absolute bg-blue-200 px-2 bg-opacity-70 text-blue-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Bestseller
					</div>
				)}
				{category === 'secret-boxes' && (
					<div className='absolute bg-purple-300 px-2 bg-opacity-70 text-purple-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Secret Box
					</div>
				)}
				<img
					src={image}
					alt={imageAlt}
					className='object-cover w-[240px] h-[240px]'
				/>

				{!count ? (
					<div
						className='bg-orange-400 flex w-[75px] absolute translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
						onClick={handleAddProductToCart}
					>
						<FiPlus />
						<button>Add</button>
					</div>
				) : (
					<div
						className='bg-orange-400 flex justify-center w-[100px] absolute translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition overflow-hidden'
						onClick={handleAddProductToCart}
					>
						<button className='hover:bg-orange-500 absolute inset-0 w-1/3'>
							+
						</button>
						<div className='text-center'>{count}</div>
						<button className='hover:bg-orange-500 absolute top-0 right-0 bottom-0 w-1/3'>
							–
						</button>
					</div>
				)}
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
				<div
					className='text-gray-500 text-ellipsis text-nowrap w-60 overflow-hidden'
					title={description}
				>
					{description}
				</div>
				<div className='flex space-x-2'>
					<div>{label}</div>
					{isBestseller && <GiStarFormation className='text-amber-400' />}
				</div>
				<div className='flex justify-start'>
					<ProductRating
						rating={rating || 0}
						size='16'
						className='flex text-yellow-400'
					/>
					<span className='text-gray-500 text-[0.75rem]'>{ratingCount}</span>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
