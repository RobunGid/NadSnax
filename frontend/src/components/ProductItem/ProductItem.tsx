import { Item } from '../../types';
import { Link } from 'react-router';
import { ProductRating } from '../Layout/ProductRating';
import styles from './ProductItem.module.css';

import clsx from 'clsx';
import { ProductItemQuantityChooser } from './ProductItemQuantityChooser';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import { useStateSelector } from '../../store';
import { formatPrice } from '../../logic/formatPrice';
import { UIProductItemPrice } from './UI/UIProductItemPrice';
import { UIProductItemLabel } from './UI/UIProductItemLabel';

type ProductItemProps = {
	item: Item;
	className?: string;
	hideAddButton?: boolean;
};

export const ProductItem = ({ item, className }: ProductItemProps) => {
	const mainImage = item.images.find((image) => image.isMain);

	const cartItem = useStateSelector((state) => state.cart.productList).find(
		(cartItem) => cartItem.item.id === item.id
	);

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	const imageURL = mainImage ? mainImage.url : item.images[0].url;

	const price = formatPrice(item.price);

	const oldPrice = item.oldPrice ? formatPrice(item.oldPrice) : '';

	return (
		<div className='hover:scale-[102.5%] transition-transform animate-fadeIn opacity-0'>
			<Link
				to={`/products/page${item.pageLink}`}
				className={clsx(
					'shadow-xl dark:shadow-gray-950 h-[360px] p-2 w-60',
					className,
					styles['product-item']
				)}
			>
				<div className='z-0'>
					<div className='relative overflow-hidden'>
						{item.isSecretbox && (
							<div className='absolute bg-purple-300/70 px-2 text-purple-900 font-bold w-52 text-center rotate-[-45deg] top-[47px] left-[-45px]'>
								Secret Box
							</div>
						)}
						<img
							src={imageURL}
							alt={`${item.label} image`}
							className='object-cover w-[240px] h-[240px] rounded-md'
						/>
						{item.isBestseller && (
							<div className='absolute bg-blue-200/70 px-2 text-blue-900 font-bold w-40 text-center -rotate-45 top-[25px] left-[-45px]'>
								Bestseller
							</div>
						)}
					</div>

					<ProductItemQuantityChooser
						cartItem={cartItem}
						onAdd={handleAddItemToCart}
						onDelete={handleRemoveProductFromCart}
						onInputChange={handleInputChange}
						onRemove={handleRemoveProductFromCart}
					/>

					<UIProductItemPrice price={price} oldPrice={oldPrice} />
					<UIProductItemLabel
						description={item.description}
						label={item.label}
						isBestseller={item.isBestseller}
					/>
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
		</div>
	);
};
