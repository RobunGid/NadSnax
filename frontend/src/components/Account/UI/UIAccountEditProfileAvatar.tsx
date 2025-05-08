import { User } from '../../../types';
import { ProfileMenuAvatar } from '../../ProfileMenu/ProfileMenuAvatar';

interface UIAccountEditProfileAvatarProps {
	user: User;
}

export const UIAccountEditProfileAvatar = ({ user }: UIAccountEditProfileAvatarProps) => {
	return (
		<ProfileMenuAvatar user={user} className='w-48 h-64 rounded-2xl object-cover' />
	);
};
