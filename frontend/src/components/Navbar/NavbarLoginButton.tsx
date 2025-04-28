import { useContext } from 'react';
import { LoginModalContext } from '../../context/LoginModalContext';
import { UINavbarLoginButton } from './UI/UINavbarLoginButton';

export const NavbarLoginButton = () => {
	const { toggleLoginModalVisibility } = useContext(LoginModalContext);
	return (
		<UINavbarLoginButton onClick={toggleLoginModalVisibility}>
			Login
		</UINavbarLoginButton>
	);
};
