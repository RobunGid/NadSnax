import { useStateSelector } from '../../store';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';

export const AccountMenuUserInfo = () => {
	const user = useStateSelector((state) => state.user.user);
	return (
		<li className='flex shadow-lg dark:shadow-gray-950 rounded-[40px] p-4 mb-4'>
			<ProfileMenuAvatar user={user} className='w-20 rounded-full' />
			<div className='p-4'>
				<div className='text-xl'>{user?.name}</div>
				<div className='text-sm text-gray-400'>{user?.email}</div>
			</div>
		</li>
	);
};
