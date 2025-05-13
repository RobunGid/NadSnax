import { User } from '../../../types';
import { UIAvatar } from '../../UI/UIAvatar';

interface UIAccountProfileProps {
	user: User;
}
export const UIAccountProfile = ({ user }: UIAccountProfileProps) => {
	return (
		<div className='flex gap-4'>
			<div className='w-48'>
				<UIAvatar
					avatarUrl={user.avatarUrl}
					username={user.username}
					className='rounded-2xl object-cover'
				/>
			</div>

			<div className='p-4 flex flex-col gap-2'>
				<div className='text-3xl font-bold'>
					{user.firstName} {user.lastName}
				</div>
				<div className='dark:text-gray-500'>@{user.username}</div>
			</div>
		</div>
	);
};
