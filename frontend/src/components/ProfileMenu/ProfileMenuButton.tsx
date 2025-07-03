import { RefObject } from 'react';
import { User } from '../../types';
import { UIAvatar } from '../UI/UIAvatar';
import { UIProfileMenuButton } from './UI/UIProfileMenuButton';

interface ProfileMenuButtonProps {
	user: User;
	inputRef: RefObject<HTMLInputElement | null>;
}

export const ProfileMenuButton = ({ user, inputRef }: ProfileMenuButtonProps) => {
	return (
		<UIProfileMenuButton inputRef={inputRef}>
			<UIAvatar username={user.username} avatarUrl={user.avatarUrl} />
		</UIProfileMenuButton>
	);
};
