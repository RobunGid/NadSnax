import { useContext } from 'react';
import { LoginModalContext } from '../../context/LoginModalContext';

export const NavbarLoginButton = () => {
	const { toggleLoginModalVisibility } = useContext(LoginModalContext);
	return <button onClick={toggleLoginModalVisibility}>tets</button>;
};
