import { ChangeEventHandler, LegacyRef, MouseEventHandler } from 'react';
import { User } from '../../../types';
import { BiEdit, BiSolidDownload, BiTrash } from 'react-icons/bi';
import { ProfileMenuAvatar } from '../../ProfileMenu/ProfileMenuAvatar';

interface UIAccountEditProfileProps {
	user: User;
	onDownloadClick?: MouseEventHandler<HTMLDivElement>;
	onDeleteClick?: MouseEventHandler<HTMLDivElement>;
	onEditClick?: MouseEventHandler<HTMLDivElement>;
	avatarInputRef?: LegacyRef<HTMLInputElement>;
	onAvatarInputChange?: ChangeEventHandler<HTMLInputElement>;
}
export const UIAccountEditProfile = ({
	user,
	onDownloadClick,
	onEditClick,
	onDeleteClick,
	avatarInputRef,
	onAvatarInputChange,
}: UIAccountEditProfileProps) => {
	return (
		<div className='flex gap-4'>
			<ProfileMenuAvatar
				user={user}
				className='w-48 h-64 rounded-2xl object-cover'
			/>
			<div className='absolute flex gap-2 p-2'>
				<div
					className='hover:cursor-pointer hover:scale-105'
					onClick={onEditClick}
				>
					<BiEdit />
					<input
						type='file'
						className='hidden'
						ref={avatarInputRef}
						onChange={onAvatarInputChange}
					/>
				</div>
				<div
					className='hover:cursor-pointer hover:scale-105'
					onClick={onDeleteClick}
				>
					<BiTrash />
				</div>
				<div
					className='hover:cursor-pointer hover:scale-105'
					onClick={onDownloadClick}
				>
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
