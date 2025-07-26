import { useContext } from 'react';
import { CartModalContext } from '../../context/CartModalContext';
import {
	clearCart,
	useActionCreators,
	useAppDispatch,
	useStateSelector,
} from '../../store';
import { UICartOrderButton } from './UI/UICartOrderButton';
import { createOrderThunk } from '../../store/orderSlice';

interface CartOrderButtonProps {
	pickupPoint: string;
}

export const CartOrderButton = ({ pickupPoint }: CartOrderButtonProps) => {
	const cartItems = useStateSelector((state) => state.cart.productList);
	const dispatch = useAppDispatch();

	const { clearCartAction } = useActionCreators({
		clearCartAction: clearCart,
	} as const);

	const { changeSuccessOrder } = useContext(CartModalContext);

	const handleOrder = async () => {
		const orderItems = cartItems.map((cartItem) => ({
			quantity: cartItem.count,
			item_id: cartItem.item.id,
		}));

		const result = await dispatch(createOrderThunk({ orderItems, pickupPoint }));

		if (result.meta.requestStatus == 'fulfilled') {
			clearCartAction();
			changeSuccessOrder(true);
		}
	};

	return <UICartOrderButton onClick={handleOrder} />;
};
