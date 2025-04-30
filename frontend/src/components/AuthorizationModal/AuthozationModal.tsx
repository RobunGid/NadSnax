import { useContext } from 'react';
import { UIModal } from '../UI/UIModal';
import { LoginModalContext } from '../../context/LoginModalContext';
import { LoginForm } from './LoginForm';

export const LoginModal = () => {
	const { loginModalVisibility, toggleLoginModalVisibility } =
		useContext(LoginModalContext);
	return (
		<UIModal active={loginModalVisibility} setActive={toggleLoginModalVisibility}>
			<LoginForm />
		</UIModal>
	);
};
