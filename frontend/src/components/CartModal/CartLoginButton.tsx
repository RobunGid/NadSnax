import { useContext } from 'react';
import { UICartLoginButton } from './UI/UICartLoginButton';
import { LoginModalContext } from '../../context/LoginModalContext';
import { CartModalContext } from '../../context/CartModalContext';

export const CartLoginButton = () => {
	const { toggleLoginModalVisibility } = useContext(LoginModalContext);
	const { toggleCartModalVisibility } = useContext(CartModalContext);

	const handleLoginButtonClick = () => {
		toggleLoginModalVisibility();
		toggleCartModalVisibility();
	};

	return <UICartLoginButton onClick={handleLoginButtonClick} />;
};
