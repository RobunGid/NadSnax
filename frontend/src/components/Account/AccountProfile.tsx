import { useStateSelector } from '../../store';

export const AccountProfile = () => {
	const user = useStateSelector((state) => state.user.user);
	return <div>{user?.avatarUrl}</div>;
};
