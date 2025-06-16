import { UIAccountSettings } from './UI/UIAccountSettings';
import { UIAccountSettingsTitle } from './UI/UIAccountSettingsTitle';
import { AccountSettingsAvatar } from './AccountSettingsAvatar';
import { AccountSettingsForm } from './AccountSettingsForm';
import { AccountSettingsDeleteButton } from './AccountSettingsDeleteButton';

export const AccountSettings = () => {
	return (
		<UIAccountSettings>
			<UIAccountSettingsTitle />
			<AccountSettingsAvatar />
			<AccountSettingsForm />
			<AccountSettingsDeleteButton />
		</UIAccountSettings>
	);
};
