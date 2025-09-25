import { useContext, useState } from 'react';
import { UIModal } from '../UI/UIModal';
import { LoginModalContext } from '../../context/LoginModalContext';
import { AuthozationModalLoginForm } from './AuthozationModalLoginForm';
import { UIAuthozationModalButtonToSignup } from './UI/UIAuthozationModalButtonToSignup';
import { UIAuthozationModalButtonToLogin } from './UI/UIAuthozationModalButtonToLogin';
import { AuthorizationModalRegisterForm } from './AuthozationModalRegisterForm';
import { UIAuthorizationModalTitle } from './UI/UIAuthorizationModalTitle';
import { useStateSelector } from '../../store';
import { UILoader } from '../UI/UILoader';

export const LoginModal = () => {
	const { loginModalVisibility, toggleLoginModalVisibility } =
		useContext(LoginModalContext);

	const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
	const authStatus = useStateSelector((state) => state.auth.status);

	return (
		<UIModal active={loginModalVisibility} setActive={toggleLoginModalVisibility}>
			<UIAuthorizationModalTitle type={isLoginForm ? 'login' : 'register'} />
			{isLoginForm && authStatus !== 'loading' && (
				<>
					<AuthozationModalLoginForm />
					<UIAuthozationModalButtonToSignup
						onClick={() => setIsLoginForm(false)}
					/>
				</>
			)}
			{!isLoginForm && authStatus !== 'loading' && (
				<>
					<AuthorizationModalRegisterForm />
					<UIAuthozationModalButtonToLogin
						onClick={() => setIsLoginForm(true)}
					/>
				</>
			)}
			{authStatus === 'loading' && (
				<UILoader className='w-80 h-30 flex justify-center items-center' />
			)}
		</UIModal>
	);
};
