import { useRef, useState } from 'react';
import { useStateSelector } from '../../../store';
import { UIAccountSettings } from './UI/UIAccountSettings';
import { UIAccountSettingsAvatar } from './UI/UIAccountSettingsAvatar';
import { UIAccountSettingsAvatarErrorMessage } from './UI/UIAccountSettingsAvatarErrorMessage';
import { UIAccountSettingsInfo } from './UI/UIAccountSettingsInfo';
import { AccountSettingsAvatarControls } from './AccountSettingsAvatarControls';

export const AccountSettings = () => {
	const user = useStateSelector((state) => state.user.user);

	const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>(
		undefined
	);

	const avatarInputRef = useRef<null | HTMLInputElement>(null);

	return (
		user && (
			<UIAccountSettings>
				<UIAccountSettingsAvatar user={user} />
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
		)
	);
};
