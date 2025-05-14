import { UIAccountSettingsInfoInput } from './UIAccountSettingsInfoInput';

interface UIAccountSettingsInfoProps {
	firstName: string;
	lastName: string;
	username: string;
}

export const UIAccountSettingsInfo = ({
	firstName,
	lastName,
	username,
}: UIAccountSettingsInfoProps) => {
	return (
		<div className='p-4 flex flex-col gap-2'>
			<UIAccountSettingsInfoInput defaultValue={firstName} label='First name' />
			<UIAccountSettingsInfoInput defaultValue={lastName} label='Last name' />
			<UIAccountSettingsInfoInput
				defaultValue={username}
				label='Username'
				isUsername
			/>
		</div>
	);
};
