import { UIAccountSettings } from './UI/UIAccountSettings';
import { UIAccountSettingsTitle } from './UI/UIAccountSettingsTitle';
import { AccountSettingsAvatar } from './AccountSettingsAvatar';
import { AccountSettingsForm } from './AccountSettingsForm';

export const AccountSettings = () => {
	return (
		<UIAccountSettings>
			<UIAccountSettingsTitle />
			<AccountSettingsAvatar />
			<AccountSettingsForm />
		</UIAccountSettings>
	);
};
