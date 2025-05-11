import { User } from '../../types';
import { UIAvatar } from '../UI/UIAvatar';

interface ProfileMenuButtonProps {
	user: User;
}

export const ProfileMenuButton = ({ user }: ProfileMenuButtonProps) => {
	return (
		<div className='overflow-hidden rounded-full w-12 h-12 peer transition-transform hover:scale-105'>
			<input type='checkbox' id='user-profile-avatar' className='hidden'></input>

			<label
				htmlFor='user-profile-avatar'
				className='block bg-cover bg-no-repeat cursor-pointer'
			>
				<UIAvatar username={user.username} avatarUrl={user.avatarUrl} />
			</label>
		</div>
	);
};
