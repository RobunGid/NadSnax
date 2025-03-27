import { Item } from '../../types';
import { Link } from 'react-router';
import { ProductRating } from './ProductRating';
import styles from './ProductItem.module.css';
import { GiStarFormation } from 'react-icons/gi';

import clsx from 'clsx';
import { ProductItemQuantityChooser } from './ProductItemQuantityChooser';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import { useStateSelector } from '../../store';

type ProductItemProps = {
	item: Item;
	className?: string;
	hideAddButton?: boolean;
};

const ProductItem = ({ item, className }: ProductItemProps) => {
	const mainImage = item.images.find((image) => image.isMain);

	const cartItem = useStateSelector((state) => state.cart.productList).find(
		(cartItem) => cartItem.item.id === item.id
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
			className={clsx(
				'shadow-xl dark:shadow-gray-950 h-[360px] p-2 w-60',
				className,
				styles['product-item']
			)}
		>
			<div className='z-0'>
				{item.category.name === 'secretboxes' && (
					<div className='absolute bg-purple-300 px-2 bg-opacity-70 text-purple-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Secret Box
					</div>
				)}
				<div className='relative overflow-hidden'>
					<img
						src={imageURL}
						alt={`${item.label} image`}
						className='object-cover w-[240px] h-[240px] rounded-md'
					/>
					{item.isBestseller && (
						<div className='absolute bg-blue-200 px-2 bg-opacity-70 text-blue-900 font-bold w-40 text-center -rotate-45 top-[25px] left-[-45px]'>
							Bestseller
						</div>
					)}
				</div>

				{
					<ProductItemQuantityChooser
						cartItem={cartItem}
						onAdd={handleAddItemToCart}
						onDelete={handleRemoveProductFromCart}
						onInputChange={handleInputChange}
						onRemove={handleRemoveProductFromCart}
					/>
				}
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
