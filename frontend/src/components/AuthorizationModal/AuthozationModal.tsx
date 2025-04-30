import { useContext, useState } from 'react';
import { UIModal } from '../UI/UIModal';
import { LoginModalContext } from '../../context/LoginModalContext';
import { AuthozationModalLoginForm } from './AuthozationModalLoginForm';
import { UIAuthozationModalButtonToSignup } from './UI/UIAuthozationModalButtonToSignup';
import { UIAuthozationModalButtonToLogin } from './UI/UIAuthozationModalButtonToLogin';

export const LoginModal = () => {
	const { loginModalVisibility, toggleLoginModalVisibility } =
		useContext(LoginModalContext);

	const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

	return (
		<UIModal active={loginModalVisibility} setActive={toggleLoginModalVisibility}>
			<AuthozationModalLoginForm />
			{isLoginForm ? (
				<UIAuthozationModalButtonToSignup onClick={() => setIsLoginForm(false)} />
			) : (
				<UIAuthozationModalButtonToLogin onClick={() => setIsLoginForm(true)} />
			)}
		</UIModal>
	);
};
