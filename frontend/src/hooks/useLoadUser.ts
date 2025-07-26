import { useStateSelector } from '../store';

export const useLoadUser = () => {
	const user = useStateSelector((state) => state.user.user);

	return {
		isUserLoaded: user !== null,
		user,
	};
};
