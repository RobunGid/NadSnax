import { ChangeEvent, EventHandler, FC, MouseEventHandler } from 'react';
import { Item } from '../../types';
import { Link } from 'react-router';
import ProductRating from './ProductRating';
import { FiPlus } from 'react-icons/fi';
import { GiStarFormation } from 'react-icons/gi';
import { RootState, useAppDispatch } from '../../store';
import {
	addItemToCart,
	changeItemCount,
	removeItemFromCart,
} from '../../store/cartSlice';
import { selectItemById } from '../../store/cartSelectors';
import { useSelector } from 'react-redux';

type ProductItemProps = {
	item: Item;
	className?: string;
	hideAddButton?: boolean;
};

const ProductItem: FC<ProductItemProps> = ({ item, className, hideAddButton }) => {
	const dispatch = useAppDispatch();

	const productCart = useSelector((state: RootState) => selectItemById(state, item.id));

	const handleInputChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
		if (Number.isNaN(parseInt(event.target.value))) return;
		dispatch(changeItemCount(item, parseFloat(event.target.value)));
	};

	const count = productCart?.count || 0;

	const {
		price,
		imageUrl,
		label,
		//rating,
		//ratingCount,
		pageLink,
		description,
		oldPrice,
		isBestseller,
		category,
	} = item;

	const handleAddItemToCart: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
		event
	) => {
		event.preventDefault();
		dispatch(addItemToCart(item));
	};

	const handleRemoveProductFromCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		dispatch(removeItemFromCart(item));
	};

	const handleDivClick: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
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
				{category.name === 'secret-boxes' && (
					<div className='absolute bg-purple-300 px-2 bg-opacity-70 text-purple-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Secret Box
					</div>
				)}
				<img
					src={imageUrl}
					alt={`${label} image`}
					className='object-cover w-[240px] h-[240px]'
				/>

				{!hideAddButton &&
					(!count ? (
						<div
							className='bg-orange-400 flex w-[100px] absolute justify-center translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
							onClick={handleAddItemToCart}
						>
							<FiPlus />
							<button>Add</button>
						</div>
					) : (
						<div className='bg-orange-400 flex justify-center w-[100px] absolute translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition'>
							<button
								className='hover:bg-orange-500 absolute inset-0 w-1/3 hover:rounded-bl-full hover:rounded-tl-full'
								onClick={handleAddItemToCart}
							>
								+
							</button>
							<div className='text-center' onClick={handleDivClick}>
								<input
									type='number'
									value={count}
									className='bg-transparent w-1/3 text-center box-border outline-none focus:outline-2 focus:scale-125 focus:outline-amber-700'
									onChange={handleInputChange}
								/>
							</div>
							<button
								className='hover:bg-orange-500 absolute top-0 right-0 bottom-0 w-1/3 hover:rounded-tr-full hover:rounded-br-full'
								onClick={handleRemoveProductFromCart}
							>
								–
							</button>
						</div>
					))}
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
					className='text-gray-500 text-ellipsis text-nowrap w-60'
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
						rating={item.averageRating}
						size='16'
						className='flex text-yellow-400'
					/>
					<span className='text-gray-500 text-[0.75rem]'>
						{item.ratingCount || 0}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
