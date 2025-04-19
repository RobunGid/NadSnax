import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';
import { useStateSelector } from '../../store';
import { Item } from '../../types';
import { UIProductDetailsQuantityChooser } from './UI/UIProductDetailsQuantityChooser';

interface ProductDetailsQuantityChooserProps {
	item: Item;
}

export const ProductDetailsQuantityChooser = ({
	item,
}: ProductDetailsQuantityChooserProps) => {
	const cartItem = useStateSelector((state) =>
		state.cart.productList.find((cartItem) => cartItem.item.id === item?.id)
	);

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item: item });

	return (
		<UIProductDetailsQuantityChooser
			count={cartItem ? cartItem.count : 0}
			onAdd={handleAddItemToCart}
			onInputChange={handleInputChange}
			onDelete={handleRemoveProductFromCart}
		/>
	);
};
