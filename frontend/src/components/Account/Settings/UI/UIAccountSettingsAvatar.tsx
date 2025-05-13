import { User } from '../../../../types';
import { UIAvatar } from '../../../UI/UIAvatar';

interface UIAccountSettingsAvatarProps {
	user: User;
}

export const UIAccountSettingsAvatar = ({ user }: UIAccountSettingsAvatarProps) => {
	return (
		<UIAvatar
			username={user.username}
			avatarUrl={user.avatarUrl}
			className='w-48 h-64 rounded-2xl object-cover'
		/>
	);
};
