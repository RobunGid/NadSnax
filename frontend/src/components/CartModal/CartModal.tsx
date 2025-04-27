import { useContext } from 'react';
import { CartModalContext } from '../../context/CartModalContext';
import { UIModal } from '../UI/UIModal';
import { Cart } from './Cart';

export const CartModal = () => {
	const { cartModalVisibility, toggleCartModalVisibility } =
		useContext(CartModalContext);
	return (
		<UIModal active={cartModalVisibility} setActive={toggleCartModalVisibility}>
			<Cart />
		</UIModal>
	);
};
