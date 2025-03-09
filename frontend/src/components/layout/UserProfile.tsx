import { FC } from 'react';

const UserProfile: FC = () => {
	return (
		<div>
			<input type='checkbox' id='user-profile-avatar'></input>
			<div>
				<label
					htmlFor='user-profile-avatar'
					className='w-12 h-12 block rounded-full'
					style={{ backgroundImage: '' }}
				></label>
			</div>
		</div>
	);
};

export default UserProfile;
