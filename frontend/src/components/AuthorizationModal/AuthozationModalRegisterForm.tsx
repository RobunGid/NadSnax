import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { fetchUser, registerThunk, useAppDispatch, useStateSelector } from '../../store';
import { UILoginForm } from './UI/UIAuthozationModalLoginForm';
import { UIButton } from '../UI/UIButton';
import { LoginModalContext } from '../../context/LoginModalContext';
import { UIAuthozationModalInput } from './UI/UIAuthozationModalInput';
import {
	registerFormConfig,
	registerFormInitialState,
	RegisterFormValue,
} from '../../logic/registerFormConfig';

export const AuthorizationModalRegisterForm = () => {
	const [registerFormState, setRegisterFormState] = useState<RegisterFormValue>(
		registerFormInitialState
	);

	const [avatarFile, setAvatarFile] = useState<undefined | File>(undefined);

	const dispatch = useAppDispatch();

	const { disableLoginModalVisibility } = useContext(LoginModalContext);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const name = event.target.name;
		setRegisterFormState((prev) => ({ ...prev, [name]: value }));
	};

	const loginStatus = useStateSelector((state) => state.auth.status);
	const loginError = useStateSelector((state) => state.auth.error);

	const errorMessage =
		loginError.message !== 'Rejected' &&
		loginStatus === 'error' &&
		loginError.message;

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await dispatch(
			registerThunk({
				...registerFormState,
				avatarFile: avatarFile,
			})
		);
		await dispatch(fetchUser());
	};

	useEffect(() => {
		if (loginStatus === 'success') {
			disableLoginModalVisibility();
			setRegisterFormState(registerFormInitialState);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loginStatus]);

	return (
		<div>
			<div className='text-lg'>Register</div>
			<UILoginForm onSubmit={onSubmit} className='text-black'>
				<label className='text-orange-600 flex justify-center mb-2'>
					{errorMessage}
				</label>
				{registerFormConfig.map((conf) => {
					const { name, ...rest } = conf;
					return (
						<UIAuthozationModalInput
							{...rest}
							onChange={onChange}
							key={name}
							name={name}
							value={registerFormState[name]}
							isLoading={loginStatus === 'loading'}
							isInvalid={!!errorMessage}
						/>
					);
				})}
				<UIAuthozationModalInput
					name='avatarFile'
					isLoading={loginStatus === 'loading'}
					isInvalid={!!errorMessage}
					type='file'
					onChange={(event) =>
						setAvatarFile(
							event.target.files ? event.target.files[0] : undefined
						)
					}
				/>
				<UIButton className='t-5 w-full h-10 flex items-center justify-center'>
					Register
				</UIButton>
			</UILoginForm>
		</div>
	);
};
