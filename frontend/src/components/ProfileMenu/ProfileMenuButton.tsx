import { User } from '../../types';
import { ProfileMenuAvatar } from './ProfileMenuAvatar';

interface ProfileMenuButtonProps {
	user: User | null;
}

export const ProfileMenuButton = ({ user }: ProfileMenuButtonProps) => {
	return (
		<div className='overflow-hidden rounded-full w-12 h-12 peer transition-transform hover:scale-105'>
			<input type='checkbox' id='user-profile-avatar' className='hidden'></input>

			<label
				htmlFor='user-profile-avatar'
				className='block bg-cover bg-no-repeat cursor-pointer'
			>
				<ProfileMenuAvatar user={user} />
			</label>
		</div>
	);
};
