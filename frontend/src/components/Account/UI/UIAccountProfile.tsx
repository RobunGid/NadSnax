import { User } from '../../../types';

interface UIAccountProfileProps {
	user: User;
}
export const UIAccountProfile = ({ user }: UIAccountProfileProps) => {
	return (
		<div className='flex gap-4'>
			<img
				src={user?.avatarUrl}
				alt={`${user?.name} Avatar`}
				className='rounded-2xl w-80 h-96 object-cover'
			/>
			<div className='p-4 flex flex-col gap-2'>
				<div className='text-3xl font-bold'>{user?.name}</div>
				<div className='dark:text-gray-500'>{user?.email}</div>
			</div>
		</div>
	);
};
