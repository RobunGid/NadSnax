import { formatPrice } from '../../logic/formatPrice';
import { useStateSelector } from '../../store';
import { Item } from '../../types';
import { UICartItem } from './UI/UICartItem';
import { UICartItemLoader } from './UI/UICartItemLoader';

type CartItemProps = {
	className?: string;
	item: Item;
	totalPrice: number;
};

export const CartItem = ({ item }: CartItemProps) => {
	const cartItem = useStateSelector((state) =>
		state.cart.productList.find((cartItem) => cartItem.item.id === item.id)
	);

	const totalPrice = cartItem ? cartItem?.item.price * cartItem.count : 0;

	const mainImage = item.images.find((image) => image.isMain) || item.images[0];

	const price = formatPrice(totalPrice);

	return (
		<>
			{cartItem && (
				<UICartItem
					item={cartItem.item}
					mainImageUrl={mainImage.url}
					totalPrice={price}
				/>
			)}
			{!cartItem && <UICartItemLoader />}
		</>
	);
};
