import { MouseEventHandler, ReactNode, useContext } from 'react';
import { Link } from 'react-router';
import { UIButton } from '../UI/UIButton';
import { CartModalContext } from '../../context/CartModalContext';

interface ToProductsButtonProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ToProductsButton = ({ children, onClick }: ToProductsButtonProps) => {
	const { toggleCartModalVisibility } = useContext(CartModalContext);

	const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		toggleCartModalVisibility();
		if (onClick) onClick(event);
	};

	return (
		<Link to='/products' className='mt-10'>
			<UIButton onClick={handleButtonClick}>{children}</UIButton>
		</Link>
	);
};
