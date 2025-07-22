import { useEffect } from 'react';
import { fetchUser, refreshThunk, useActionCreators } from '../store';

export const useInitUser = () => {
	const { fetchSelfAccessToken, fetchSelfUser } = useActionCreators({
		fetchSelfAccessToken: refreshThunk,
		fetchSelfUser: fetchUser,
	});

	useEffect(() => {
		(async () => {
			await fetchSelfAccessToken();
			await fetchSelfUser();
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
