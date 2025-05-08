import { User } from '../../../types';

interface UIAccountProfileProps {
	user: User;
}
export const UIAccountProfile = ({ user }: UIAccountProfileProps) => {
	return (
		<div className='flex gap-4'>
			<img
				src={user.avatarUrl}
				alt={`${user.username} Avatar`}
				width='400'
				className='rounded-2xl w-48 h-64 object-cover'
			/>
			<div className='p-4 flex flex-col gap-2'>
				<div className='text-3xl font-bold'>
					{user.firstName} {user.lastName}
				</div>
				<div className='dark:text-gray-500'>@{user.username}</div>
			</div>
		</div>
	);
};
