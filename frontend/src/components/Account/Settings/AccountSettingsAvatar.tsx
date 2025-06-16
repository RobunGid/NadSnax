import { useRef, useState } from 'react';
import { AccountSettingsAvatarControls } from './AccountSettingsAvatarControls';
import { UIAccountSettingsAvatar } from './UI/UIAccountSettingsAvatar';
import { UIAccountSettingsAvatarErrorMessage } from './UI/UIAccountSettingsAvatarErrorMessage';
import { useStateSelector } from '../../../store';

export const AccountSettingsAvatar = () => {
	const avatarInputRef = useRef<null | HTMLInputElement>(null);

	const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>(
		undefined
	);

	const user = useStateSelector((state) => state.user.user);
	const status = useStateSelector((state) => state.user.status);

	return (
		user &&
		status == 'success' && (
			<>
				<UIAccountSettingsAvatar />
				<UIAccountSettingsAvatarErrorMessage
					avatarErrorMessage={avatarErrorMessage}
				/>
				<AccountSettingsAvatarControls
					avatarInputRef={avatarInputRef}
					setAvatarErrorMessage={setAvatarErrorMessage}
					user={user}
				/>
			</>
		)
	);
};
