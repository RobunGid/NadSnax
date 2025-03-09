import { FC } from 'react';
import { UserProfileAvatar } from '../UserProfile/UserProfileAvatar';

interface UserProfileProps {
	className?: string;
}

const UserProfile: FC<UserProfileProps> = ({ className }) => {
	const user = {
		name: 'John Doe',
		email: 'email@example.com',
		id: 'wsfc3843',
		avatarUrl: 'http://localhost/resources/images/avatar.jpeg',
	};

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
					<UserProfileAvatar user={user} />
				</label>
			</div>

			<div className='overflow-hidden transition-all duration-200 max-h-0 peer-has-[:checked]:max-h-[300px] absolute right-2 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600'>
				<div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
					<div>{user.name}</div>
					<div className='font-medium truncate'>{user.email}</div>
				</div>
				<ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							Order History
						</a>
					</li>
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							Settings
						</a>
					</li>
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							My Reviews
						</a>
					</li>
				</ul>
				<div className='py-1'>
					<a
						href='#'
						className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
					>
						Sign out
					</a>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
