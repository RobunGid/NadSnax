import { ChangeEventHandler, useState } from 'react';
import { UIAccountSettingsForm } from './UI/UIAccountSettingsForm';
import { User } from '../../../types';
import { UIAccountSettingsInfoInput } from './UI/UIAccountSettingsInfoInput';
import { updateUser, useAppDispatch } from '../../../store';
import { UIButton } from '../../UI/UIButton';

export type SettingsFormValue = {
	firstName: string;
	lastName: string;
	username: string;
};

interface AccountSettingsFormProps {
	user: User;
}

export const AccountSettingsForm = ({ user }: AccountSettingsFormProps) => {
	const dispatch = useAppDispatch();
	const settingsFormInitialState: SettingsFormValue = {
		firstName: user.firstName,
		lastName: user.lastName,
		username: user.username,
	};
	const [settingsFormState, setSettingsFormState] = useState<SettingsFormValue>(
		settingsFormInitialState
	);

	const handleChangeSettingsForm: ChangeEventHandler<HTMLInputElement> = (event) => {
		setSettingsFormState((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleUpdateData = () => {
		dispatch(updateUser(settingsFormState));
	};

	return (
		<UIAccountSettingsForm>
			<UIAccountSettingsInfoInput
				label='First name'
				value={settingsFormState.firstName}
				name='firstName'
				onChange={handleChangeSettingsForm}
			/>
			<UIAccountSettingsInfoInput
				label='Last name'
				value={settingsFormState.lastName}
				name='lastName'
				onChange={handleChangeSettingsForm}
			/>
			<UIAccountSettingsInfoInput
				label='Username'
				isUsername
				value={settingsFormState.username}
				name='username'
				onChange={handleChangeSettingsForm}
			/>
			<UIButton onClick={handleUpdateData}>Change data</UIButton>
		</UIAccountSettingsForm>
	);
};
