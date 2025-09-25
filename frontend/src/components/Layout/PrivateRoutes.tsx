import { Navigate, Outlet } from 'react-router';
import { LoginModalContext } from '../../context/LoginModalContext';
import { useContext, useEffect } from 'react';
import { isUserDefined, Role, User } from '../../types';

interface PrivateRoutesProps {
	roles: Role[];
	isAuthenticated: boolean;
	user: User | null;
}

export const PrivateRoutes = ({ roles, isAuthenticated, user }: PrivateRoutesProps) => {
	useEffect(() => {
		if (!isAuthenticated) {
			toggleLoginModalVisibility();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	const { toggleLoginModalVisibility } = useContext(LoginModalContext);

	if (isAuthenticated && isUserDefined(user) && roles.includes(user.role)) {
		return <Outlet />;
	}
	if (!isAuthenticated || (isUserDefined(user) && !roles.includes(user.role))) {
		return <Navigate to='/home' replace />;
	}
};
