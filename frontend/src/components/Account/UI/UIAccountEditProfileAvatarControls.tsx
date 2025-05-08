import { ChangeEventHandler, LegacyRef, MouseEventHandler } from 'react';
import { BiEdit, BiSolidDownload, BiTrash } from 'react-icons/bi';

interface UIAccountEditProfileAvatarControlsProps {
	onDownloadClick?: MouseEventHandler<HTMLDivElement>;
	onDeleteClick?: MouseEventHandler<HTMLDivElement>;
	onEditClick?: MouseEventHandler<HTMLDivElement>;
	avatarInputRef?: LegacyRef<HTMLInputElement>;
	onAvatarInputChange?: ChangeEventHandler<HTMLInputElement>;
}

export const UIAccountEditProfileAvatarControls = ({
	onEditClick,
	avatarInputRef,
	onAvatarInputChange,
	onDeleteClick,
	onDownloadClick,
}: UIAccountEditProfileAvatarControlsProps) => {
	return (
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
	);
};
