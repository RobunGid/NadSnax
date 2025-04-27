import { useContext } from 'react';
import { UIModal } from '../UI/UIModal';
import { LoginModalContext } from '../../context/LoginModalContext';

export const LoginModal = () => {
	const { loginModalVisibility, toggleLoginModalVisibility } =
		useContext(LoginModalContext);
	return (
		<UIModal active={loginModalVisibility} setActive={toggleLoginModalVisibility}>
			<form>test</form>
		</UIModal>
	);
};
