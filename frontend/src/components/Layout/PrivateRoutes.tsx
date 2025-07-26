import { Navigate, Outlet } from 'react-router';
import { LoginModalContext } from '../../context/LoginModalContext';
import { useContext, useEffect } from 'react';
import { isUserDefined, Role } from '../../types';
import { useAuth } from '../../hooks/useAuth';

interface PrivateRoutesProps {
	roles: Role[];
}

export const PrivateRoutes = ({ roles }: PrivateRoutesProps) => {
	const { isAuthenticated, isUserLoaded, user } = useAuth();

	useEffect(() => {
		if (isAuthenticated) {
			toggleLoginModalVisibility();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	const { toggleLoginModalVisibility } = useContext(LoginModalContext);

	if (
		isUserLoaded &&
		isAuthenticated &&
		isUserDefined(user) &&
		roles.includes(user.role)
	) {
		return <Outlet />;
	}
	if (
		!isAuthenticated ||
		!isUserLoaded ||
		(isUserLoaded && isUserDefined(user) && !roles.includes(user.role))
	) {
		return <Navigate to='/home' replace />;
	}
};
