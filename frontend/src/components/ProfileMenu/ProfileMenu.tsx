import { Link } from 'react-router';
import { ProfileMenuAvatar } from './ProfileMenuAvatar';
import { ThemeSwitcher } from '../layout/ThemeSwitcher';
import { useStateSelector } from '../../store';

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

			<ul className='overflow-hidden transition-all duration-200 max-h-0 peer-has-[:checked]:max-h-[350px] absolute right-2 top-16 z-10 bg-gray-200 divide-y divide-gray-300 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600'>
				<li>
					<ThemeSwitcher className='m-2' />
				</li>
				<li>
					<Link
						to='/account/profile'
						className='block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
					>
						My Profile
					</Link>
				</li>
				<li className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
					<div>{user?.name}</div>
					<div className='font-medium truncate'>{user?.email}</div>
				</li>
				<li>
					<ul>
						<li>
							<Link
								to='/account/order_history'
								className='block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Order History
							</Link>
						</li>
						<li>
							<Link
								to='/account/settings'
								className='block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Settings
							</Link>
						</li>
						<li>
							<Link
								to='/account/reviews'
								className='block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								My Reviews
							</Link>
						</li>
					</ul>
				</li>

				<li className='py-1'>
					<Link
						to='/account/signout'
						className='block px-4 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
					>
						Sign out
					</Link>
				</li>
			</ul>
		</div>
	);
};
