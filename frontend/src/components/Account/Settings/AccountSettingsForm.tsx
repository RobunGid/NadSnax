import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react';
import { UIAccountSettingsForm } from './UI/UIAccountSettingsForm';
import { updateUser, useAppDispatch, useStateSelector } from '../../../store';
import { UIButton } from '../../UI/UIButton';
import { UIAccountSettingsInput } from './UI/UIAccountSettingsInput';

export type SettingsFormValue = {
	firstName: string;
	lastName: string;
	username: string;
};

export const AccountSettingsForm = () => {
	const dispatch = useAppDispatch();
	const user = useStateSelector((state) => state.user.user);

	const error = useStateSelector((state) => state.user.error);
	const status = useStateSelector((state) => state.user.status);

	const isInit = useRef<boolean>(true);

	const settingsFormInitialState: SettingsFormValue = {
		firstName: '',
		lastName: '',
		username: '',
	};

	useEffect(() => {
		if (user && isInit.current) {
			setSettingsFormState({
				firstName: user.firstName,
				lastName: user.lastName,
				username: user.username,
			});
			isInit.current = false;
		}
	}, [user]);

	const [settingsFormState, setSettingsFormState] = useState<SettingsFormValue>(
		settingsFormInitialState
	);

	const handleChangeSettingsForm: ChangeEventHandler<HTMLInputElement> = (event) => {
		setSettingsFormState((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleUpdateData: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		dispatch(updateUser(settingsFormState));
	};
	return (
		<UIAccountSettingsForm onSubmit={handleUpdateData}>
			<label className='text-orange-600 flex justify-center mb-2'>
				{error.data?.message}
			</label>
			<UIAccountSettingsInput
				label='First name'
				value={settingsFormState.firstName}
				name='firstName'
				onChange={handleChangeSettingsForm}
				minLength={3}
			/>
			<UIAccountSettingsInput
				label='Last name'
				value={settingsFormState.lastName}
				name='lastName'
				onChange={handleChangeSettingsForm}
				minLength={3}
			/>
			<UIAccountSettingsInput
				label='Username'
				isUsername
				value={settingsFormState.username}
				name='username'
				onChange={handleChangeSettingsForm}
				minLength={5}
				isInvalid={status === 'error'}
			/>
			<UIButton>Change data</UIButton>
		</UIAccountSettingsForm>
	);
};
