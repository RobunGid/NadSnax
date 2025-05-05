import { Item } from '../../types';
import { Link } from 'react-router';
import styles from './ProductItem.module.css';

import clsx from 'clsx';
import { ProductItemQuantityChooser } from './ProductItemQuantityChooser';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import { useStateSelector } from '../../store';
import { formatPrice } from '../../logic/formatPrice';
import { UIProductItemPrice } from './UI/UIProductItemPrice';
import { UIProductItemLabel } from './UI/UIProductItemLabel';
import { UIProductItemImage } from './UI/UIProductItemImage';
import { UIProductItemRating } from './UI/UIProductItemRating';
import { getMainImageURL } from '../../logic/getMainImageURL';

type ProductItemProps = {
	item: Item;
	className?: string;
	hideAddButton?: boolean;
};

export const ProductItem = ({ item, className }: ProductItemProps) => {
	const cartItem = useStateSelector((state) => state.cart.productList).find(
		(cartItem) => cartItem.item.id === item.id
	);

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	const imageURL = getMainImageURL(item);

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
				<div>
					<UIProductItemImage
						imageURL={imageURL}
						isBestseller={item.isBestseller}
						isSecretbox={!!item.isSecretbox}
						label={item.label}
					/>

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
					<UIProductItemRating
						ratingCount={item.ratingCount}
						averageRating={item.averageRating}
					/>
				</div>
			</Link>
		</div>
	);
};
