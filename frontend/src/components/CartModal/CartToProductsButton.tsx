import { ReactNode, useContext } from 'react';
import { UIToProductsButton } from '../UI/UIToProductsButton';
import { CartModalContext } from '../../context/CartModalContext';

interface CartToProductsButtonProps {
	children: ReactNode;
}

export const CartToProductsButton = ({ children }: CartToProductsButtonProps) => {
	const { toggleCartModalVisibility, changeSuccessOrder } =
		useContext(CartModalContext);

	const handleButtonClick = () => {
		toggleCartModalVisibility();
		changeSuccessOrder(false);
	};

	return (
		<UIToProductsButton onClick={handleButtonClick}>{children}</UIToProductsButton>
	);
};
