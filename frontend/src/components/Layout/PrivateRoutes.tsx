import { Navigate, Outlet } from 'react-router';
import { useStateSelector } from '../../store';
import { LoginModalContext } from '../../context/LoginModalContext';
import { useContext, useEffect } from 'react';
import { Role } from '../../types';

interface PrivateRoutesProps {
	roles: Role[];
}

export const PrivateRoutes = ({ roles }: PrivateRoutesProps) => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);
	const accessTokenStatus = useStateSelector((state) => state.auth.status);
	const user = useStateSelector((state) => state.user.user);

	useEffect(() => {
		if (accessTokenStatus == 'error') {
			toggleLoginModalVisibility();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessTokenStatus]);

	const { toggleLoginModalVisibility } = useContext(LoginModalContext);

	if (
		accessToken &&
		accessTokenStatus == 'success' &&
		user &&
		roles.includes(user.role)
	) {
		return <Outlet />;
	}

	if (accessTokenStatus == 'error' || (user && !roles.includes(user.role))) {
		return <Navigate to='/home' replace />;
	}
};
