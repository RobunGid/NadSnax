import { useStateSelector } from '../../store';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';
import { AccountMenuCard } from './AccountMenuCard';

export const AccountMenuUserInfo = () => {
	const user = useStateSelector((state) => state.user.user);
	return (
		<AccountMenuCard className='w-80 flex flex-row bg-gray-800'>
			<ProfileMenuAvatar user={user} className='w-20 rounded-full' />
			<div className='p-4'>
				<div className='text-xl'>{user?.name}</div>
				<div className='text-sm text-gray-400'>{user?.email}</div>
			</div>
		</AccountMenuCard>
	);
};
