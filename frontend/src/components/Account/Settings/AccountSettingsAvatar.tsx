import { useRef, useState } from 'react';
import { AccountSettingsAvatarControls } from './AccountSettingsAvatarControls';
import { UIAccountSettingsAvatar } from './UI/UIAccountSettingsAvatar';
import { UIAccountSettingsAvatarErrorMessage } from './UI/UIAccountSettingsAvatarErrorMessage';
import { User } from '../../../types';

interface AccountSettingsAvatarProps {
	user: User;
}

export const AccountSettingsAvatar = ({ user }: AccountSettingsAvatarProps) => {
	const avatarInputRef = useRef<null | HTMLInputElement>(null);

	const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>(
		undefined
	);

	return (
		<>
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
		</>
	);
};
