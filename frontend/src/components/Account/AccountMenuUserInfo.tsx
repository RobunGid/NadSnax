import { Status } from '../../store/types';
import { User } from '../../types';
import { UIAccountUserInfo } from './UI/UIAccountUserInfo';
import { UIAccountUserInfoLoader } from './UI/UIAccountUserInfoLoader';

interface AccountMenuUserInfoProps {
	user: User | null;
	status: Status;
}

export const AccountMenuUserInfo = ({ user, status }: AccountMenuUserInfoProps) => {
	return (
		<>
			{user && status == 'success' && <UIAccountUserInfo user={user} />}
			{(!user || status == 'loading') && <UIAccountUserInfoLoader />}
		</>
	);
};
