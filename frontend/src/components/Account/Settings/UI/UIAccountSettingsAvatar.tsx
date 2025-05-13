import { UIAvatar } from '../../../UI/UIAvatar';

interface UIAccountSettingsAvatarProps {
	username: string;
	avatarUrl: string;
}

export const UIAccountSettingsAvatar = ({
	username,
	avatarUrl,
}: UIAccountSettingsAvatarProps) => {
	return (
		<div className='w-48'>
			<UIAvatar
				username={username}
				avatarUrl={avatarUrl}
				className='rounded-2xl object-cover'
			/>
		</div>
	);
};
