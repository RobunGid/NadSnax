import { useStateSelector } from '../../../store';
import { UIAccountSettings } from './UI/UIAccountSettings';
import { UIAccountSettingsInfo } from './UI/UIAccountSettingsInfo';
import { UIAccountUserInfoLoader } from '../UI/UIAccountUserInfoLoader';
import { UIAccountSettingsTitle } from './UI/UIAccountSettingsTitle';
import { AccountSettingsAvatar } from './AccountSettingsAvatar';

export const AccountSettings = () => {
	const { user, status } = useStateSelector((state) => state.user);

	return user && status === 'success' ? (
		<UIAccountSettings>
			<UIAccountSettingsTitle />
			<AccountSettingsAvatar user={user} />
			<UIAccountSettingsInfo
				lastName={user.lastName}
				firstName={user.firstName}
				username={user.username}
			/>
		</UIAccountSettings>
	) : (
		<UIAccountUserInfoLoader />
	);
};
