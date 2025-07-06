import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import { formatPrice } from '../../logic/formatPrice';
import { CartItemType } from '../../types';
import { UICartItem } from './UI/UICartItem';

type CartItemProps = {
	className?: string;
	cartItem: CartItemType;
};

export const CartItem = ({ cartItem }: CartItemProps) => {
	const totalPrice = cartItem?.item.convertedPrice * cartItem.count;

	const mainImage =
		cartItem.item.images.find((image) => image.isMain) || cartItem.item.images[0];

	const price = formatPrice(totalPrice);

	const {
		handleAddItemToCart,
		handleRemoveProductFromCart,
		handleInputChange,
		handleDeleteItemFromCart,
	} = useItemQuantityChooser({ item: cartItem.item });

	return (
		<UICartItem
			cartItem={cartItem}
			mainImageUrl={mainImage.url}
			totalPrice={price}
			handleAddItemToCart={handleAddItemToCart}
			handleRemoveProductFromCart={handleRemoveProductFromCart}
			handleInputChange={handleInputChange}
			handleDeleteItemFromCart={handleDeleteItemFromCart}
		/>
	);
};
