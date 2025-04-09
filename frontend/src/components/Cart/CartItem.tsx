import { formatPrice } from '../../logic/formatPrice';
import { CartItemType } from '../../types';
import { UICartItem } from './UI/UICartItem';

type CartItemProps = {
	className?: string;
	cartItem: CartItemType;
};

export const CartItem = ({ cartItem }: CartItemProps) => {
	const totalPrice = cartItem ? cartItem?.item.price * cartItem.count : 0;

	const mainImage =
		cartItem.item.images.find((image) => image.isMain) || cartItem.item.images[0];

	const price = formatPrice(totalPrice);

	return (
		<UICartItem
			item={cartItem.item}
			mainImageUrl={mainImage.url}
			totalPrice={price}
		/>
	);
};
