import { useRef, useState } from 'react';
import { useStateSelector } from '../../store';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';
import clsx from 'clsx';
import { AccountEditProfileAvatarControls } from './AccountEditProfileAvatarControls';

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
				<div
					className={clsx(
						'bg-orange-600 shadow-2xl p-2 absolute rounded-xl -top-12 -left-4 opacity-0',
						avatarErrorMessage && 'animate-fadeOut'
					)}
				>
					{avatarErrorMessage}
					<div className='absolute border-orange-600 top-10 left-5 border-x-transparent border-t-[16px] border-x-[16px]'></div>
				</div>
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
