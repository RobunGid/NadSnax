import { CartItem } from './CartItem';
import { useStateSelector } from '../../store';
import { UICartHeader } from './UI/UICartHeader';
import { UICart } from './UI/UICart';
import { UICartTitle } from './UI/UICartTitle';
import { CartOrderInfo } from './CartOrderInfo';
import { CartModalContext } from '../../context/CartModalContext';
import { useContext, useState } from 'react';
import { CartMessage } from './CartMessage';
import { CartOrderButton } from './CartOrderButton';
import { UICartContainer } from './UI/UICartContainer';
import { CartLoginButton } from './CartLoginButton';

export const Cart = () => {
	const cartItems = useStateSelector((state) => state.cart.productList);
	const userStatus = useStateSelector((state) => state.user.status);
	const user = useStateSelector((state) => state.user.user);
	const isLoggedIn = userStatus == 'success' && user;
	const { isSuccessOrder } = useContext(CartModalContext);
	const [pickupPoint, setPickupPoint] = useState<string>('');

	return (
		<UICart>
			{cartItems.length != 0 && (
				<>
					<UICartTitle />
					<UICartContainer>
						<UICartHeader />
						{cartItems.map((cartItem) => (
							<CartItem cartItem={cartItem} key={cartItem.item.id} />
						))}
					</UICartContainer>
					<UICartContainer bordered count={2}>
						{isLoggedIn ? (
							<>
								<CartOrderButton pickupPoint={pickupPoint} />
								<CartOrderInfo
									pickupPoint={pickupPoint}
									setPickupPoint={setPickupPoint}
								/>
							</>
						) : (
							<CartLoginButton />
						)}
					</UICartContainer>
				</>
			)}
			{cartItems.length == 0 && (
				<CartMessage type={isSuccessOrder ? 'success' : 'empty'} />
			)}
		</UICart>
	);
};
