import { User } from '../../../../types';
import { UIAvatar } from '../../../UI/UIAvatar';
interface UIAccountSettingsAvatarProps {
	user: User;
}

export const UIAccountSettingsAvatar = ({ user }: UIAccountSettingsAvatarProps) => {
	return (
		<div className='w-48'>
			<UIAvatar
				username={user.username}
				avatarUrl={user.avatarUrl}
				className='rounded-2xl object-cover'
			/>
		</div>
	);
};
