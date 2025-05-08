import { Axios } from '../../api';
import { useStateSelector } from '../../store';
import { UIAccountEditProfile } from './UI/UIAccountEditProfile';

export const AccountEditProfile = () => {
	const user = useStateSelector((state) => state.user.user);
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

	return (
		user && (
			<UIAccountEditProfile user={user} onDownloadClick={handleDownloadAvatar} />
		)
	);
};
