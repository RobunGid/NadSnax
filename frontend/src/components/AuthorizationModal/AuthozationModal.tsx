import { useContext, useState } from 'react';
import { UIModal } from '../UI/UIModal';
import { LoginModalContext } from '../../context/LoginModalContext';
import { AuthozationModalLoginForm } from './AuthozationModalLoginForm';
import { UIAuthozationModalButtonToSignup } from './UI/UIAuthozationModalButtonToSignup';
import { UIAuthozationModalButtonToLogin } from './UI/UIAuthozationModalButtonToLogin';
import { AuthorizationModalRegisterForm } from './AuthozationModalRegisterForm';
import { UIAuthorizationModalTitle } from './UI/UIAuthorizationModalTitle';

export const LoginModal = () => {
	const { loginModalVisibility, toggleLoginModalVisibility } =
		useContext(LoginModalContext);

	const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

	return (
		<UIModal active={loginModalVisibility} setActive={toggleLoginModalVisibility}>
			<UIAuthorizationModalTitle type={isLoginForm ? 'login' : 'register'} />
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
