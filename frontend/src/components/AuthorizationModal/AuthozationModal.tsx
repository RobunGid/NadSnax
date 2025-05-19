import { useContext, useState } from 'react';
import { UIModal } from '../UI/UIModal';
import { LoginModalContext } from '../../context/LoginModalContext';
import { AuthozationModalLoginForm } from './AuthozationModalLoginForm';
import { UIAuthozationModalButtonToSignup } from './UI/UIAuthozationModalButtonToSignup';
import { UIAuthozationModalButtonToLogin } from './UI/UIAuthozationModalButtonToLogin';
import { AuthorizationModalRegisterForm } from './AuthozationModalRegisterForm';

export const LoginModal = () => {
	const { loginModalVisibility, toggleLoginModalVisibility } =
		useContext(LoginModalContext);

	const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

	console.log(loginModalVisibility);

	return (
		<UIModal active={loginModalVisibility} setActive={toggleLoginModalVisibility}>
			{isLoginForm ? (
				<>
					<AuthozationModalLoginForm />
					<UIAuthozationModalButtonToSignup
						onClick={() => setIsLoginForm(false)}
					/>
				</>
			) : (
				<>
					<AuthorizationModalRegisterForm />
					<UIAuthozationModalButtonToLogin
						onClick={() => setIsLoginForm(true)}
					/>
				</>
			)}
		</UIModal>
	);
};
