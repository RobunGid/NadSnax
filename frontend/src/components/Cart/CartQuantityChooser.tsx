import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import { useStateSelector } from '../../store';
import { Item } from '../../types';
import { UICartQuantityChooser } from './UI/UICartQuantityChooser';
import { UICartQuantityChooserLoader } from './UI/UICartQuantityChooserLoader';

interface CartQuantityChooserProps {
	item: Item;
}

export const CartQuantityChooser = ({ item }: CartQuantityChooserProps) => {
	const cartItem = useStateSelector((state) =>
		state.cart.productList.find((cartItem) => cartItem.item.id === item.id)
	);

	const {
		handleAddItemToCart,
		handleRemoveProductFromCart,
		handleInputChange,
		handleDeleteItemFromCart,
	} = useItemQuantityChooser({ item: cartItem?.item });

	return cartItem ? (
		<UICartQuantityChooser
			cartItem={cartItem}
			onAdd={handleAddItemToCart}
			onDelete={handleDeleteItemFromCart}
			onInputChange={handleInputChange}
			onRemove={handleRemoveProductFromCart}
		/>
	) : (
		<UICartQuantityChooserLoader />
	);
};
