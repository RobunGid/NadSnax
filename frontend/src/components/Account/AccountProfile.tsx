import { useStateSelector } from '../../store';
import { UIAccountProfile } from './UI/UIAccountProfile';

export const AccountProfile = () => {
	const user = useStateSelector((state) => state.user.user);
	return user && <UIAccountProfile user={user} />;
};
