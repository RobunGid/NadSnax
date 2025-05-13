import { useRef, useState } from 'react';
import { useStateSelector } from '../../../store';
import { UIAccountSettings } from './UI/UIAccountSettings';
import { UIAccountSettingsAvatar } from './UI/UIAccountSettingsAvatar';
import { UIAccountSettingsAvatarErrorMessage } from './UI/UIAccountSettingsAvatarErrorMessage';
import { UIAccountSettingsInfo } from './UI/UIAccountSettingsInfo';
import { AccountSettingsAvatarControls } from './AccountSettingsAvatarControls';
import { UIAccountUserInfoLoader } from '../UI/UIAccountUserInfoLoader';

export const AccountSettings = () => {
	const { user, status } = useStateSelector((state) => state.user);

	const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>(
		undefined
	);

	const avatarInputRef = useRef<null | HTMLInputElement>(null);

	return user && status === 'success' ? (
		<UIAccountSettings>
			<UIAccountSettingsAvatar
				username={user.username}
				avatarUrl={user.avatarUrl}
			/>
			<UIAccountSettingsAvatarErrorMessage
				avatarErrorMessage={avatarErrorMessage}
			/>
			<AccountSettingsAvatarControls
				avatarInputRef={avatarInputRef}
				setAvatarErrorMessage={setAvatarErrorMessage}
				user={user}
			/>

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
