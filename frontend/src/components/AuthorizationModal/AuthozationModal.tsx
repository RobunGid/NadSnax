import { useContext } from 'react';
import { UIModal } from '../UI/UIModal';
import { LoginModalContext } from '../../context/LoginModalContext';
import { AuthozationModalLoginForm } from './AuthozationModalLoginForm';

export const LoginModal = () => {
	const { loginModalVisibility, toggleLoginModalVisibility } =
		useContext(LoginModalContext);
	return (
		<UIModal active={loginModalVisibility} setActive={toggleLoginModalVisibility}>
			<AuthozationModalLoginForm />
		</UIModal>
	);
};
