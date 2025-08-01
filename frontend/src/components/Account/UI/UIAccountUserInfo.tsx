import { User } from '../../../types';
import { UIAvatar } from '../../UI/UIAvatar';

interface UIAccountUserInfo {
	user: User;
}

export const UIAccountUserInfo = ({ user }: UIAccountUserInfo) => {
	return (
		<li className='flex shadow-lg dark:shadow-gray-950 rounded-[40px] p-4 mb-4'>
			<UIAvatar
				username={user.username}
				avatarUrl={user.avatarUrl}
				className='rounded-full w-24 h-24 object-cover'
			/>
			<div className='p-4'>
				<div className='text-xl'>
					{user.firstName} {user.lastName}
				</div>
				<div className='text-sm text-gray-600 dark:text-gray-400'>
					@{user.username}
				</div>
			</div>
		</li>
	);
};
