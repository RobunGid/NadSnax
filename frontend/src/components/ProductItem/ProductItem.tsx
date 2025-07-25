import { Item } from '../../types';

import { ProductItemQuantityChooser } from './ProductItemQuantityChooser';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import {
	addFavoriteThunk,
	deleteFavoriteThunk,
	useActionCreators,
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
import { UIProductItemInfoContainer } from './UI/UIProductItemInfoContainer';
import { useAuth } from '../../hooks/useAuth';

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

	const { isAuthenticated } = useAuth();

	const { addToFavorite, deleteFromFavorite } = useActionCreators({
		addToFavorite: addFavoriteThunk,
		deleteFromFavorite: deleteFavoriteThunk,
	});

	const { lang } = useI18n();

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	const handleAddToFavorite: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		addToFavorite({ itemId: item.id });
	};

	const handleDeleteFromFavorite: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		if (item.favoriteId) deleteFromFavorite({ favoriteId: item.favoriteId });
	};

	const formattedPrice = formatPrice(item.price, lang);

	const formattedOldPrice = item.oldPrice ? formatPrice(item.oldPrice, lang) : '';

	const pageLink = `/products/page/${item.name}`;
	const discount = item.oldPrice
		? Math.floor(((item.oldPrice - item.price) / item.oldPrice) * 100)
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
				showFavorite={isAuthenticated}
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
				<UIProductItemInfoContainer>
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
				</UIProductItemInfoContainer>
			)}
		</UIProductItem>
	);
};
