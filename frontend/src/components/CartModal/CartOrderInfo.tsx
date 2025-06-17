import { formatPrice } from '../../logic/formatPrice';
import { useStateSelector } from '../../store';
import { UICartOrderInfo } from './UI/UICartOrderInfo';
import { UICartOrderInfoTitle } from './UI/UICartOrderInfoTitle';

export const CartOrderInfo = () => {
	const user = useStateSelector((state) => state.user.user);

	const cartItems = useStateSelector((state) => state.cart.productList);
	const orderAmount = cartItems.reduce(
		(prev, cur) => prev + cur.count * cur.item.price,
		0
	);
	const itemQuantity = cartItems.reduce((prev, cur) => prev + cur.count, 0);
	const formattedOrderAmount = formatPrice(orderAmount);

	return (
		<UICartOrderInfo>
			<UICartOrderInfoTitle size='big'>Order information</UICartOrderInfoTitle>
			<UICartOrderInfoTitle>
				{'Full name: '}
				<strong>
					{user?.firstName} {user?.lastName}
				</strong>
			</UICartOrderInfoTitle>
			<UICartOrderInfoTitle>
				Order pickup point: <strong>Standard</strong>
			</UICartOrderInfoTitle>
			<UICartOrderInfoTitle>
				Total order amount: <strong>{formattedOrderAmount}</strong>
			</UICartOrderInfoTitle>
			<UICartOrderInfoTitle>
				Order items quantity: <strong>{itemQuantity}</strong>
			</UICartOrderInfoTitle>
		</UICartOrderInfo>
	);
};
