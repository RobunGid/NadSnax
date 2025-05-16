import { ReactNode, useContext } from 'react';
import { UIToProductsButton } from '../UI/UIToProductsButton';
import { CartModalContext } from '../../context/CartModalContext';

interface ToProductsButtonProps {
	children: ReactNode;
}

export const ToProductsButton = ({ children }: ToProductsButtonProps) => {
	const { toggleCartModalVisibility } = useContext(CartModalContext);

	const handleButtonClick = () => {
		toggleCartModalVisibility();
	};

	return (
		<UIToProductsButton onClick={handleButtonClick}>{children}</UIToProductsButton>
	);
};
