import { useStateSelector } from '../store';

export const useAuth = () => {
	const user = useStateSelector((state) => state.user.user);
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	return {
		isAuthenticated: accessToken != '',
		isUserLoaded: user !== null,
		user,
		accessToken,
	};
};
