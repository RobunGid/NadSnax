import { ProfileMenuAvatar } from './ProfileMenuAvatar';
import { ThemeSwitcher } from '../layout/ThemeSwitcher';
import { useStateSelector } from '../../store';
import { ProfileMenuItem } from './ProfileMenuItem';

interface ProfileMenuProps {
	className?: string;
}

export const ProfileMenu = ({ className }: ProfileMenuProps) => {
	const user = useStateSelector((state) => state.user.user);
	return (
		<div className={className}>
			<div className='overflow-hidden rounded-full w-12 h-12 peer transition-transform hover:scale-105'>
				<input
					type='checkbox'
					id='user-profile-avatar'
					className='hidden'
				></input>

				<label
					htmlFor='user-profile-avatar'
					className='block bg-cover bg-no-repeat cursor-pointer'
				>
					<ProfileMenuAvatar user={user} />
				</label>
			</div>

			<ul className='overflow-hidden duration-200 max-h-0 peer-has-[:checked]:max-h-[350px] absolute right-2 top-16 z-10 bg-gray-200 divide-y divide-gray-300 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600'>
				<li>
					<ThemeSwitcher className='m-2' />
				</li>
				<ProfileMenuItem to='/account/profile'>My Profile</ProfileMenuItem>
				<li className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
					<div>{user?.name}</div>
					<div className='font-medium truncate'>{user?.email}</div>
				</li>
				<li>
					<ul>
						<ProfileMenuItem to='/account/order_history'>
							Order History
						</ProfileMenuItem>
						<ProfileMenuItem to='/account/settings'>Settings</ProfileMenuItem>

						<ProfileMenuItem to='/account/reviews'>
							My reviews
						</ProfileMenuItem>
					</ul>
				</li>

				<ProfileMenuItem to='/account/signout' type='secondary'>
					Sign out
				</ProfileMenuItem>
			</ul>
		</div>
	);
};
