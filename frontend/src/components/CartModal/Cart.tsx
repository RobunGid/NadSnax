import { CartItem } from './CartItem';
import { useStateSelector } from '../../store';
import { UICartHeader } from './UI/UICartHeader';
import { UICart } from './UI/UICart';
import { UICartTitle } from './UI/UICartTitle';
import { CartEmptyMessage } from './CartEmptyMessage';
import { CartOrderButton } from './CartOrderButton';
import { UICartInfo } from './UI/UICartInfo';
import { CartOrderInfo } from './CartOrderInfo';

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
			<UICartInfo>
				{cartItems.length != 0 && <CartOrderButton />}
				{cartItems.length != 0 && <CartOrderInfo />}
			</UICartInfo>
		</>
	);
};
