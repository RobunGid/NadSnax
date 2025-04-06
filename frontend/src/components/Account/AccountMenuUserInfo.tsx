import { useStateSelector } from '../../store';
import { UIAccountUserInfo } from './UI/UIAccountUserInfo';

export const AccountMenuUserInfo = () => {
	const user = useStateSelector((state) => state.user.user);
	return user && <UIAccountUserInfo user={user} />;
};
