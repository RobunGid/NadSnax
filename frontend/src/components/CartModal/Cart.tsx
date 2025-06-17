import { CartItem } from './CartItem';
import { useStateSelector } from '../../store';
import { UICartHeader } from './UI/UICartHeader';
import { UICart } from './UI/UICart';
import { UICartTitle } from './UI/UICartTitle';
import { CartOrderButton } from './CartOrderButton';
import { UICartInfo } from './UI/UICartInfo';
import { CartOrderInfo } from './CartOrderInfo';
import { CartModalContext } from '../../context/CartModalContext';
import { useContext } from 'react';
import { CartMessage } from './CartMessage';

export const Cart = () => {
	const cartItems = useStateSelector((state) => state.cart.productList);
	const { isSuccessOrder } = useContext(CartModalContext);

	return (
		<>
			<UICartTitle />
			<UICart>
				{cartItems.length != 0 && <UICartHeader />}

				{cartItems.map((cartItem) => (
					<CartItem cartItem={cartItem} key={cartItem.item.id} />
				))}

				{cartItems.length == 0 && (
					<CartMessage type={isSuccessOrder ? 'success' : 'empty'} />
				)}
			</UICart>
			{cartItems.length != 0 && (
				<UICartInfo>
					<CartOrderButton />
					<CartOrderInfo />
				</UICartInfo>
			)}
		</>
	);
};
