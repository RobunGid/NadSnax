import { User } from '../../../types';
import { BiEdit, BiSolidDownload, BiTrash } from 'react-icons/bi';

interface UIAccountEditProfileProps {
	user: User;
}
export const UIAccountEditProfile = ({ user }: UIAccountEditProfileProps) => {
	return (
		<div className='flex gap-4'>
			<img
				src={user.avatarUrl}
				alt={`${user.username} Avatar`}
				width='400'
				className='rounded-2xl w-48 h-64 object-cover'
			/>
			<div className='absolute flex gap-2 p-2'>
				<div className='hover:cursor-pointer hover:scale-105'>
					<BiEdit />
				</div>
				<div className='hover:cursor-pointer hover:scale-105'>
					<BiTrash />
				</div>
				<div className='hover:cursor-pointer hover:scale-105'>
					<BiSolidDownload />
				</div>
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
