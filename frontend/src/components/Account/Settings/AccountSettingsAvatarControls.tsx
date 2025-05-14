import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { UIAccountSettingsAvatarControls } from './UI/UIAccountSettingsAvatarControls';
import { User } from '../../../types';
import { useEditUserAvatar } from '../../../hooks/useEditUserAvatar';

interface AccountSettingsAvatarControlsProps {
	setAvatarErrorMessage: Dispatch<SetStateAction<string | undefined>>;
	avatarInputRef: MutableRefObject<null | HTMLInputElement>;
	user: User;
	avatarErrorMessage?: string;
}

export const AccountSettingsAvatarControls = ({
	avatarInputRef,
	user,
	setAvatarErrorMessage,
}: AccountSettingsAvatarControlsProps) => {
	const {
		handleChangeAvatar,
		handleDeleteAvatar,
		handleDownloadAvatar,
		handleAvatarInputChange,
	} = useEditUserAvatar({
		user,
		avatarInputRef,
		setAvatarErrorMessage,
	});
	return (
		<UIAccountSettingsAvatarControls
			onAvatarInputChange={handleAvatarInputChange}
			onEditClick={handleChangeAvatar}
			onDeleteClick={handleDeleteAvatar}
			onDownloadClick={handleDownloadAvatar}
			avatarInputRef={avatarInputRef}
		/>
	);
};
