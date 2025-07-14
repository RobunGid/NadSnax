import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import {
	loginFormConfig,
	loginFormInitialState,
	LoginFormValue,
} from '../../logic/loginFormConfig';
import { fetchUser, loginThunk, useAppDispatch, useStateSelector } from '../../store';
import { UIButton } from '../UI/UIButton';
import { LoginModalContext } from '../../context/LoginModalContext';
import { UIInput } from '../UI/UIInput';
import { useTranslate } from '../../i18n/i18n';
import { UIAuthorizationModalErrorMessage } from './UI/UIAuthorizationModalErrorMessage';
import { UILoginForm } from './UI/UILoginForm';

export const AuthozationModalLoginForm = () => {
	const [loginFormState, setLoginFormState] =
		useState<LoginFormValue>(loginFormInitialState);

	const dispatch = useAppDispatch();

	const translate = useTranslate();

	const { disableLoginModalVisibility } = useContext(LoginModalContext);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const name = event.target.name;
		setLoginFormState((prev) => ({ ...prev, [name]: value }));
	};

	const loginStatus = useStateSelector((state) => state.auth.status);
	const loginError = useStateSelector((state) => state.auth.error);
	const errorMessage =
		loginError.message === 'Request failed with status code 401' &&
		loginStatus === 'error' &&
		loginError.data?.message !== 'Token is missing or invalid' &&
		'Wrong login of password';

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await dispatch(loginThunk(loginFormState));
		dispatch(fetchUser());
	};

	useEffect(() => {
		if (loginStatus === 'success') {
			disableLoginModalVisibility();
			setLoginFormState(loginFormInitialState);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loginStatus]);

	return (
		<UILoginForm onSubmit={onSubmit} className='text-black'>
			<UIAuthorizationModalErrorMessage>
				{errorMessage}
			</UIAuthorizationModalErrorMessage>
			{loginFormConfig.map((conf) => {
				const { name, placeholderKey, ...rest } = conf;
				const placeholderValue = placeholderKey
					? translate(placeholderKey)
					: undefined;

				return (
					<UIInput
						{...rest}
						onChange={onChange}
						placeholder={placeholderValue}
						key={name}
						name={name}
						value={loginFormState[name]}
						isLoading={loginStatus === 'loading'}
						isInvalid={!!errorMessage}
					/>
				);
			})}
			<UIButton className='t-5 w-60 h-10 flex items-center justify-center'>
				{translate('authorization_modal.button.login')}
			</UIButton>
		</UILoginForm>
	);
};
