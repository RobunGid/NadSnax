import { ChangeEventHandler, LegacyRef, MouseEventHandler } from 'react';
import { User } from '../../../types';
import { BiEdit, BiSolidDownload, BiTrash } from 'react-icons/bi';
import { ProfileMenuAvatar } from '../../ProfileMenu/ProfileMenuAvatar';
import clsx from 'clsx';

interface UIAccountEditProfileProps {
	user: User;
	onDownloadClick?: MouseEventHandler<HTMLDivElement>;
	onDeleteClick?: MouseEventHandler<HTMLDivElement>;
	onEditClick?: MouseEventHandler<HTMLDivElement>;
	avatarInputRef?: LegacyRef<HTMLInputElement>;
	onAvatarInputChange?: ChangeEventHandler<HTMLInputElement>;
	avatarErrorMessage?: string;
}
export const UIAccountEditProfile = ({
	user,
	onDownloadClick,
	onEditClick,
	onDeleteClick,
	avatarInputRef,
	onAvatarInputChange,
	avatarErrorMessage,
}: UIAccountEditProfileProps) => {
	return (
		<div className='flex gap-4 relative'>
			<ProfileMenuAvatar
				user={user}
				className='w-48 h-64 rounded-2xl object-cover'
			/>
			<div
				className={clsx(
					'bg-orange-600 shadow-2xl p-2 absolute rounded-xl -top-12 -left-4 opacity-0',
					avatarErrorMessage && 'animate-fadeOut'
				)}
			>
				{avatarErrorMessage}
				<div className='absolute border-orange-600 top-10 left-5 border-x-transparent border-t-[16px] border-x-[16px]'></div>
			</div>
			<div className='absolute flex gap-2 p-2'>
				<div
					className='hover:cursor-pointer hover:scale-105'
					onClick={onEditClick}
					title='Edit avatar image. Support .png, .jpeg, .jpg up to 1 MB'
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
					title='Delete avatar image'
				>
					<BiTrash />
				</div>
				<div
					className='hover:cursor-pointer hover:scale-105'
					onClick={onDownloadClick}
					title='Download avatar image'
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
