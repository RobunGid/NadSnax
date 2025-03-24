import { Item } from '../../types';
import { Link } from 'react-router';
import { ProductRating } from './ProductRating';
import styles from './ProductItem.module.css';
import { GiStarFormation } from 'react-icons/gi';

import clsx from 'clsx';
import { ProductItemQuantityChooser } from './ProductItemQuantityChooser';
import { selectItemFromCartById } from '../../store/cartSelectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import { FiPlus } from 'react-icons/fi';

type ProductItemProps = {
	item: Item;
	className?: string;
	hideAddButton?: boolean;
};

const ProductItem = ({ item, className }: ProductItemProps) => {
	const mainImage = item.images.find((image) => image.isMain);

	const cartItem = useSelector((state: RootState) =>
		selectItemFromCartById(state, item.id)
	);

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	let imageURL = '';

	if (mainImage) {
		imageURL = mainImage.url;
	} else {
		imageURL = item.images[0].url;
	}

	const productPrice =
		item.price &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(item.price);

	const productOldPrice =
		item.oldPrice &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(item.oldPrice);

	return (
		<Link
			to={`/products/page${item.pageLink}`}
			className={clsx(className, styles['product-item'])}
		>
			<div className='relative z-0 overflow-hidden'>
				{item.isBestseller && (
					<div className='absolute bg-blue-200 px-2 bg-opacity-70 text-blue-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Bestseller
					</div>
				)}
				{item.category.name === 'secretboxes' && (
					<div className='absolute bg-purple-300 px-2 bg-opacity-70 text-purple-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Secret Box
					</div>
				)}
				<img
					src={imageURL}
					alt={`${item.label} image`}
					className='object-cover w-[240px] h-[240px]'
				/>

				{cartItem && cartItem.count && (
					<ProductItemQuantityChooser
						cartItem={cartItem}
						onAdd={handleAddItemToCart}
						onDelete={handleRemoveProductFromCart}
						onInputChange={handleInputChange}
						onRemove={handleRemoveProductFromCart}
					/>
				)}
				{(!cartItem || !cartItem.count) && (
					<div
						className='dark:bg-sky-800 bg-orange-400 flex w-[100px] absolute justify-center translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
						onClick={handleAddItemToCart}
					>
						<FiPlus />
						<button>Add</button>
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
					className='text-gray-500 w-52 truncate dark:text-gray-300'
					title={item.description}
				>
					{item.description}
				</div>
				<div className='flex text-xs space-x-2 dark:text-gray-600 items-center h-5'>
					<div>{item.label}</div>
					{item.isBestseller && <GiStarFormation className='text-amber-400' />}
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
