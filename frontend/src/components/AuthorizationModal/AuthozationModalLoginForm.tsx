import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import {
	loginFormConfig,
	loginFormInitialState,
	LoginFormValue,
} from '../../logic/loginFormConfig';
import { loginThunk, useAppDispatch } from '../../store';
import { UILoginForm } from './UI/UIAuthozationModalLoginForm';
import { UIButton } from '../UI/UIButton';
import { LoginModalContext } from '../../context/LoginModalContext';
import { UIAuthozationModalInput } from './UI/UIAuthozationModalInput';

export const AuthozationModalLoginForm = () => {
	const [loginFormState, setLoginFormState] =
		useState<LoginFormValue>(loginFormInitialState);

	const dispatch = useAppDispatch();

	const { toggleLoginModalVisibility } = useContext(LoginModalContext);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const name = event.target.name;
		setLoginFormState((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		toggleLoginModalVisibility();
		dispatch(loginThunk(loginFormState));
	};

	return (
		<div>
			<span className='text-lg'>Login</span>
			<UILoginForm onSubmit={onSubmit} className='text-black'>
				{loginFormConfig.map((conf) => (
					<UIAuthozationModalInput
						{...conf}
						onChange={onChange}
						key={conf.name}
						value={loginFormState[conf.name]}
					></UIAuthozationModalInput>
				))}
				<UIButton className='t-5 w-full h-10 flex items-center justify-center'>
					Login
				</UIButton>
			</UILoginForm>
		</div>
	);
};
