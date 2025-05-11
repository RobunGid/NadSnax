import { User } from '../../../types';
import { UIAvatar } from '../../UI/UIAvatar';

interface UIAccountEditProfileAvatarProps {
	user: User;
}

export const UIAccountEditProfileAvatar = ({ user }: UIAccountEditProfileAvatarProps) => {
	return (
		<UIAvatar
			username={user.username}
			avatarUrl={user.avatarUrl}
			className='w-48 h-64 rounded-2xl object-cover'
		/>
	);
};
