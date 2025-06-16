import { useStateSelector } from '../../../../store';
import { UIAvatar } from '../../../UI/UIAvatar';

export const UIAccountSettingsAvatar = () => {
	const { user, status } = useStateSelector((state) => state.user);
	return (
		user &&
		status == 'success' && (
			<div className='w-48'>
				<UIAvatar
					username={user.username}
					avatarUrl={user.avatarUrl}
					className='rounded-2xl object-cover'
				/>
			</div>
		)
	);
};
