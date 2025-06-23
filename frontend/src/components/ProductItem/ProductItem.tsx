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

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	const imageURL = getMainImageURL(item);

	const price = formatPrice(item.price);

	const oldPrice = item.oldPrice ? formatPrice(item.oldPrice) : '';

	const pageLink = `/products/page${item.pageLink}`;

	return (
		<UIProductItem pageLink={pageLink} className={className} isSmall={hideInfo}>
			<ProductItemCover
				imageURL={imageURL}
				isBestseller={item.isBestseller}
				isSecretbox={item.isSecretbox}
				label={item.label}
				isFavorite={!!item.favoriteId}
				onAddClick={(event) => {
					event.preventDefault();
					dispatch(addFavoriteThunk({ itemId: item.id }));
				}}
				onDeleteClick={(event) => {
					event.preventDefault();
					if (item.favoriteId)
						dispatch(deleteFavoriteThunk({ favoriteId: item.favoriteId }));
				}}
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
				<div className='flex flex-col gap-1 p-2'>
					<UIProductItemPrice price={price} oldPrice={oldPrice} />
					<UIProductItemLabel
						description={item.description}
						label={item.label}
					/>
					<UIProductItemRating
						ratingCount={item.ratingCount}
						averageRating={item.averageRating}
					/>
				</div>
			)}
		</UIProductItem>
	);
};
