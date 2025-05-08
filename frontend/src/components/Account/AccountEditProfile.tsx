import { useStateSelector } from '../../store';
import { UIAccountEditProfile } from './UI/UIAccountEditProfile';

export const AccountEditProfile = () => {
	const user = useStateSelector((state) => state.user.user);
	return user && <UIAccountEditProfile user={user} />;
};
