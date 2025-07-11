import { useContext } from 'react';
import { LoginModalContext } from '../../context/LoginModalContext';
import { UINavbarLoginButton } from './UI/UINavbarLoginButton';
import { useTranslate } from '../../i18n/i18n';

export const NavbarLoginButton = () => {
	const { toggleLoginModalVisibility } = useContext(LoginModalContext);
	const translate = useTranslate();
	return (
		<UINavbarLoginButton onClick={toggleLoginModalVisibility}>
			{translate('navbar.login_button')}
		</UINavbarLoginButton>
	);
};
