import { ChangeEventHandler, Dispatch, MutableRefObject, SetStateAction } from 'react';
import { fetchUser, useAppDispatch, useStateSelector } from '../store';
import { Axios } from '../api';
import { AxiosError } from 'axios';
import { User } from '../types';

interface useEditUserAvatarParams {
	user: User;
	avatarInputRef: MutableRefObject<HTMLInputElement | null>;
	setAvatarErrorMessage: Dispatch<SetStateAction<string | undefined>>;
}

export const useEditUserAvatar = ({
	user,
	avatarInputRef,
	setAvatarErrorMessage,
}: useEditUserAvatarParams) => {
	const dispatch = useAppDispatch();

	const accessToken = useStateSelector((state) => state.auth.accessToken);
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
		dispatch(fetchUser());
	};
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
		if (avatarInputRef?.current) avatarInputRef.current.click();
	};

	const handleDeleteAvatar = async () => {
		await Axios.delete('/avatar/me', {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${accessToken}`,
			},
		});
		dispatch(fetchUser());
	};

	return {
		handleChangeAvatar,
		handleDeleteAvatar,
		handleDownloadAvatar,
		handleAvatarInputChange,
	};
};
