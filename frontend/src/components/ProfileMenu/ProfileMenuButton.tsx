import { User } from '../../types';
import { UIAvatar } from '../UI/UIAvatar';
import { UIProfileMenuButton } from './UI/UIProfileMenuButton';

interface ProfileMenuButtonProps {
	user: User;
}

export const ProfileMenuButton = ({ user }: ProfileMenuButtonProps) => {
	return (
		<UIProfileMenuButton>
			<UIAvatar username={user.username} avatarUrl={user.avatarUrl} />
		</UIProfileMenuButton>
	);
};
