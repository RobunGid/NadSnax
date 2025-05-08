import { ChangeEventHandler, useRef, useState } from 'react';
import { Axios } from '../../api';
import { fetchUser, useAppDispatch, useStateSelector } from '../../store';
import { UIAccountEditProfile } from './UI/UIAccountEditProfile';
import { AxiosError } from 'axios';

export const AccountEditProfile = () => {
	const dispatch = useAppDispatch();
	const user = useStateSelector((state) => state.user.user);

	const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>(
		undefined
	);

	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const avatarInputRef = useRef<null | HTMLInputElement>(null);

	const handleDownloadAvatar = async () => {
		const response = await Axios.get(`${user?.avatarUrl}`, {
			responseType: 'blob',
		});

		const blobUrl = URL.createObjectURL(response.data);

		const link = document.createElement('a');
		link.href = blobUrl;
		link.download = user?.username + ' Avatar';
		document.body.append(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(blobUrl);
	};

	const handleChangeAvatar = () => {
		if (avatarInputRef.current) avatarInputRef.current.click();
	};

	const handleDeleteAvatar = async () => {
		await Axios.delete('/avatar/me', {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${accessToken}`,
			},
		});
	};

	const handleAvatarInputChange: ChangeEventHandler<HTMLInputElement> = async (
		event
	) => {
		const file = event.target.files && event.target.files[0];
		if (!file) return;
		const formData = new FormData();
		formData.append('avatar', file);
		try {
			await Axios.put('/avatar/me', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${accessToken}`,
				},
			});
			setAvatarErrorMessage(undefined);
		} catch (error) {
			if (error instanceof AxiosError)
				setAvatarErrorMessage(error.response?.data.message);
		}
		dispatch(fetchUser(accessToken));
	};

	return (
		user && (
			<UIAccountEditProfile
				user={user}
				onDownloadClick={handleDownloadAvatar}
				onEditClick={handleChangeAvatar}
				onAvatarInputChange={handleAvatarInputChange}
				avatarInputRef={avatarInputRef}
				avatarErrorMessage={avatarErrorMessage}
				onDeleteClick={handleDeleteAvatar}
			/>
		)
	);
};
