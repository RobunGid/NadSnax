import { Item } from '../../types';

import { ProductItemQuantityChooser } from './ProductItemQuantityChooser';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import {
	addFavoriteThunk,
	deleteFavoriteThunk,
	useAppDispatch,
	useStateSelector,
} from '../../store';
import { formatPrice } from '../../logic/formatPrice';
import { UIProductItemPrice } from './UI/UIProductItemPrice';
import { UIProductItemLabel } from './UI/UIProductItemLabel';
import { UIProductItemRating } from './UI/UIProductItemRating';
import { getMainImageURL } from '../../logic/getMainImageURL';
import { UIProductItem } from './UI/UIProductItem';
import { ProductItemCover } from './ProductItemCover';
import { MouseEventHandler } from 'react';
import { useI18n } from '../../i18n/i18n';

type ProductItemProps = {
	item: Item;
	className?: string;
	hideAddButton?: boolean;
	hideInfo?: boolean;
};

export const ProductItem = ({
	item,
	className,
	hideAddButton,
	hideInfo,
}: ProductItemProps) => {
	const cartItem = useStateSelector((state) => state.cart.productList).find(
		(cartItem) => cartItem.item.id === item.id
	);

	const dispatch = useAppDispatch();

	const { lang } = useI18n();

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	const handleAddToFavorite: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		dispatch(addFavoriteThunk({ itemId: item.id }));
	};

	const handleDeleteFromFavorite: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		if (item.favoriteId)
			dispatch(deleteFavoriteThunk({ favoriteId: item.favoriteId }));
	};

	const formattedPrice = formatPrice(item.convertedPrice, lang);

	const formattedOldPrice = item.oldPrice
		? formatPrice(item.convertedOldPrice, lang)
		: '';

	const pageLink = `/products/page${item.pageLink}`;
	const discount = item.oldPrice
		? Math.floor(
				((item.convertedOldPrice - item.convertedPrice) /
					item.convertedOldPrice) *
					100
		  )
		: 0;

	const imageURL = getMainImageURL(item);

	const formattedAverageRating = item.averageRating.toFixed(1);

	return (
		<UIProductItem pageLink={pageLink} className={className} isSmall={hideInfo}>
			<ProductItemCover
				imageURL={imageURL}
				item={item}
				onAddClick={handleAddToFavorite}
				onDeleteClick={handleDeleteFromFavorite}
			/>
			{!hideAddButton && (
				<ProductItemQuantityChooser
					cartItem={cartItem}
					onAdd={handleAddItemToCart}
					onDelete={handleRemoveProductFromCart}
					onInputChange={handleInputChange}
					onRemove={handleRemoveProductFromCart}
				/>
			)}
			{!hideInfo && (
				<div className='px-4 mt-2'>
					<UIProductItemPrice
						price={formattedPrice}
						oldPrice={formattedOldPrice}
						discount={discount}
					/>
					<UIProductItemLabel label={item.label} />
					<UIProductItemRating
						reviewCount={item.ratingCount}
						averageRating={formattedAverageRating}
					/>
				</div>
			)}
		</UIProductItem>
	);
};
