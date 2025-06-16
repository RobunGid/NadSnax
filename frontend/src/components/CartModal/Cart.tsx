import { CartItem } from './CartItem';
import { useStateSelector } from '../../store';
import { UICartHeader } from './UI/UICartHeader';
import { UICart } from './UI/UICart';
import { UICartTitle } from './UI/UICartTitle';
import { CartEmptyMessage } from './CartEmptyMessage';

export const Cart = () => {
	const cartItems = useStateSelector((state) => state.cart.productList);

	return (
		<>
			<UICartTitle />
			<UICart>
				{cartItems.length != 0 && <UICartHeader />}

				{cartItems.map((cartItem) => (
					<CartItem cartItem={cartItem} key={cartItem.item.id} />
				))}

				{cartItems.length == 0 && <CartEmptyMessage />}
			</UICart>
		</>
	);
};
