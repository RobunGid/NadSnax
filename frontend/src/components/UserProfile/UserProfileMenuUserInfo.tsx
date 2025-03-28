import { useStateSelector } from '../../store';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';

export const UserProfileMenuUserInfo = () => {
	const user = useStateSelector((state) => state.user.user);
	return (
		<div className='dark:bg-gray-700 p-4 w-48 rounded-xl'>
			<ProfileMenuAvatar user={user} className='w-28 rounded-full' />
		</div>
	);
};
