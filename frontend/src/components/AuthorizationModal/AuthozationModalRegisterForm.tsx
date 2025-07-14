import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	useContext,
	useEffect,
	useState,
} from 'react';
import { fetchUser, registerThunk, useAppDispatch, useStateSelector } from '../../store';
import { UIButton } from '../UI/UIButton';
import { LoginModalContext } from '../../context/LoginModalContext';
import {
	registerFormConfig,
	registerFormInitialState,
	RegisterFormValue,
} from '../../logic/registerFormConfig';
import { UIInput } from '../UI/UIInput';
import { useTranslate } from '@ayub-begimkulov/i18n';
import { UIAuthorizationModalAvatarInput } from './UI/UIAuthorizationModalAvatarInput';
import { UIRegisterForm } from './UI/UIRegisterForm';

export const AuthorizationModalRegisterForm = () => {
	const [registerFormState, setRegisterFormState] = useState<RegisterFormValue>(
		registerFormInitialState
	);

	const [avatarFile, setAvatarFile] = useState<undefined | File>(undefined);

	const translate = useTranslate();

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
		loginError.data?.message &&
		loginError.data.message != 'Token is missing or invalid' &&
		loginStatus === 'error' &&
		loginError.data.message;

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

	const onAvatarChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setAvatarFile(event.target.files ? event.target.files[0] : undefined);
	};

	useEffect(() => {
		if (loginStatus === 'success') {
			disableLoginModalVisibility();
			setRegisterFormState(registerFormInitialState);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loginStatus]);

	return (
		<UIRegisterForm onSubmit={onSubmit} className='text-black'>
			<label className='text-orange-600 flex justify-center mb-2'>
				{errorMessage}
			</label>
			{registerFormConfig.map((conf) => {
				const { name, placeholderKey, ...rest } = conf;
				const placeholder = translate(placeholderKey);
				return (
					<UIInput
						{...rest}
						onChange={onChange}
						key={name}
						name={name}
						placeholder={placeholder}
						value={registerFormState[name]}
						isLoading={loginStatus === 'loading'}
						isInvalid={!!errorMessage}
					/>
				);
			})}
			<UIAuthorizationModalAvatarInput onChange={onAvatarChange} />

			<UIButton className='t-5 w-full h-10 flex items-center justify-center'>
				{translate('authorization_modal.button.register')}
			</UIButton>
		</UIRegisterForm>
	);
};
