import { UIAccountSettings } from './UI/UIAccountSettings';
import { UIAccountSettingsTitle } from './UI/UIAccountSettingsTitle';
import { AccountSettingsAvatar } from './AccountSettingsAvatar';
import { AccountSettingsForm } from './AccountSettingsForm';
import { AccountSettingsLanguageSelector } from './AccountSettingsLanguageSelector';

export const AccountSettings = () => {
	return (
		<UIAccountSettings>
			<UIAccountSettingsTitle />
			<AccountSettingsAvatar />
			<AccountSettingsForm />
			<AccountSettingsLanguageSelector />
		</UIAccountSettings>
	);
};
