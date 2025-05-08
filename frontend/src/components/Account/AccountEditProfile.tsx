import { useRef, useState } from 'react';
import { useStateSelector } from '../../store';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';
import { AccountEditProfileAvatarControls } from './AccountEditProfileAvatarControls';
import { UIAccountEditProfileAvatarErrorMessage } from './UI/UIAccountEditProfileAvatarErrorMessage';

export const AccountEditProfile = () => {
	const user = useStateSelector((state) => state.user.user);

	const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>(
		undefined
	);

	const avatarInputRef = useRef<null | HTMLInputElement>(null);

	return (
		user && (
			<div className='flex gap-4 relative'>
				<ProfileMenuAvatar
					user={user}
					className='w-48 h-64 rounded-2xl object-cover'
				/>
				<UIAccountEditProfileAvatarErrorMessage
					avatarErrorMessage={avatarErrorMessage}
				/>
				<AccountEditProfileAvatarControls
					avatarInputRef={avatarInputRef}
					setAvatarErrorMessage={setAvatarErrorMessage}
					user={user}
				/>

				<div className='p-4 flex flex-col gap-2'>
					<div className='text-3xl font-bold'>
						{user.firstName} {user.lastName}
					</div>
					<div className='dark:text-gray-500'>@{user.username}</div>
				</div>
			</div>
		)
	);
};
