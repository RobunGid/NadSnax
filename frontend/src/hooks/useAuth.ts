import { useStateSelector } from '../store';

export const useAuth = () => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	return {
		isAuthenticated: accessToken !== '',
		accessToken,
	};
};
