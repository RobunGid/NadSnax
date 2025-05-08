import { useRef, useState } from 'react';
import { useStateSelector } from '../../store';
import { AccountEditProfileAvatarControls } from './AccountEditProfileAvatarControls';
import { UIAccountEditProfileAvatarErrorMessage } from './UI/UIAccountEditProfileAvatarErrorMessage';
import { UIAccountEditProfileInfo } from './UI/UIAccountEditProfileInfo';
import { UIAccountEditProfileAvatar } from './UI/UIAccountEditProfileAvatar';

export const AccountEditProfile = () => {
	const user = useStateSelector((state) => state.user.user);

	const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>(
		undefined
	);

	const avatarInputRef = useRef<null | HTMLInputElement>(null);

	return (
		user && (
			<div className='flex gap-4 relative'>
				<UIAccountEditProfileAvatar user={user} />
				<UIAccountEditProfileAvatarErrorMessage
					avatarErrorMessage={avatarErrorMessage}
				/>
				<AccountEditProfileAvatarControls
					avatarInputRef={avatarInputRef}
					setAvatarErrorMessage={setAvatarErrorMessage}
					user={user}
				/>

				<UIAccountEditProfileInfo
					lastName={user.lastName}
					firstName={user.firstName}
					username={user.username}
				/>
			</div>
		)
	);
};
