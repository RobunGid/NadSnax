import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router';
import { UIButton } from './UIButton';

interface UIToProductsButtonProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UIToProductsButton = ({ children, onClick }: UIToProductsButtonProps) => {
	return (
		<Link to='/products' className='mt-10'>
			<UIButton onClick={onClick}>{children}</UIButton>
		</Link>
	);
};
