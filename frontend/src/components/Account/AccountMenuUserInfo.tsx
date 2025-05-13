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
			{user && status == 'success' && (
				<UIAccountUserInfo
					avatarUrl={user.avatarUrl}
					firstName={user.firstName}
					lastName={user.lastName}
					username={user.username}
				/>
			)}
			{(!user || status == 'loading') && <UIAccountUserInfoLoader />}
		</>
	);
};
