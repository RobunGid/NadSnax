import { useStateSelector } from '../../../store';
import { UIAccountSettings } from './UI/UIAccountSettings';
import { UIAccountUserInfoLoader } from '../UI/UIAccountUserInfoLoader';
import { UIAccountSettingsTitle } from './UI/UIAccountSettingsTitle';
import { AccountSettingsAvatar } from './AccountSettingsAvatar';
import { AccountSettingsForm } from './AccountSettingsForm';
import { AccountSettingsDeleteButton } from './AccountSettingsDeleteButton';

export const AccountSettings = () => {
	const { user } = useStateSelector((state) => state.user);

	return user ? (
		<UIAccountSettings>
			<UIAccountSettingsTitle />
			<AccountSettingsAvatar user={user} />
			<AccountSettingsForm user={user} />
			<AccountSettingsDeleteButton />
		</UIAccountSettings>
	) : (
		<UIAccountUserInfoLoader />
	);
};
