import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { formatPrice } from '../../logic/formatPrice';
import { useStateSelector } from '../../store';
import { UICartOrderInfo } from './UI/UICartOrderInfo';
import { CartOrderInfoField } from './CartOrderInfoField';

interface CartOrderInfoProps {
	pickupPoint: string;
	setPickupPoint: Dispatch<SetStateAction<string>>;
}

export const CartOrderInfo = ({ pickupPoint, setPickupPoint }: CartOrderInfoProps) => {
	const user = useStateSelector((state) => state.user.user);

	const cartItems = useStateSelector((state) => state.cart.productList);
	const orderAmount = cartItems.reduce(
		(prev, cur) => prev + cur.count * cur.item.price,
		0
	);
	const itemQuantity = String(cartItems.reduce((prev, cur) => prev + cur.count, 0));
	const formattedTotalAmount = formatPrice(orderAmount);

	const formattedFullName = `${user && user.firstName} ${user && user.lastName}`;

	const handleChangePickupPointInput: ChangeEventHandler<HTMLSelectElement> = (
		event
	) => {
		setPickupPoint(event.target.value);
	};

	return (
		<UICartOrderInfo>
			<CartOrderInfoField.FullName fullName={formattedFullName} />
			<CartOrderInfoField.TotalAmount totalAmount={formattedTotalAmount} />
			<CartOrderInfoField.ItemQuantity itemQuantity={itemQuantity} />
			<CartOrderInfoField.PickupPoint
				value={pickupPoint}
				onChange={handleChangePickupPointInput}
			/>
		</UICartOrderInfo>
	);
};
