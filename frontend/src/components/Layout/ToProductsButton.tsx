import { MouseEventHandler, ReactNode, useContext } from 'react';
import { Link } from 'react-router';
import { UIButton } from '../UI/UIButton';
import { ModalContext } from '../../context/ModalContext';

interface ToProductsButtonProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ToProductsButton = ({ children, onClick }: ToProductsButtonProps) => {
	const { toggleModalVisibility } = useContext(ModalContext);

	return (
		<Link to='/products' className='mt-10'>
			<UIButton onClick={onClick && toggleModalVisibility}>{children}</UIButton>
		</Link>
	);
};
