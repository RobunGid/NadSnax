import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router';
import { UIButton } from '../UI/UIButton';

interface ToProductsButtonProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ToProductsButton = ({ children, onClick }: ToProductsButtonProps) => {
	return (
		<Link to='/products' className='mt-10'>
			<UIButton onClick={onClick}>{children}</UIButton>
		</Link>
	);
};
