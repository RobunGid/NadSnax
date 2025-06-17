import { useContext } from 'react';
import { Axios } from '../../api';
import { CartModalContext } from '../../context/CartModalContext';
import { clearCart, useAppDispatch, useStateSelector } from '../../store';
import { UICartOrderButton } from './UI/UICartOrderButton';

export const CartOrderButton = () => {
	const cartItems = useStateSelector((state) => state.cart.productList);
	const accessToken = useStateSelector((state) => state.auth.accessToken);
	const dispatch = useAppDispatch();
	const { changeSuccessOrder } = useContext(CartModalContext);

	const handleOrder = async () => {
		const orderItems = cartItems.map((cartItem) => ({
			quantity: cartItem.count,
			item_id: cartItem.item.id,
		}));

		const response = await Axios.post('/orders', orderItems, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		if (response.request.status === 201) {
			console.log(cartItems, response);
			dispatch(clearCart());
			changeSuccessOrder(true);
		}
	};
	return <UICartOrderButton onClick={handleOrder}>Order</UICartOrderButton>;
};
