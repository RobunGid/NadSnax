import { Navigate, Outlet } from 'react-router';
import { LoginModalContext } from '../../context/LoginModalContext';
import { useContext, useEffect } from 'react';
import { isUserDefined, Role } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { useLoadUser } from '../../hooks/useLoadUser';
import { useStateSelector } from '../../store';

interface PrivateRoutesProps {
	roles: Role[];
}

export const PrivateRoutes = ({ roles }: PrivateRoutesProps) => {
	const { isAuthenticated } = useAuth();
	const { user } = useLoadUser();
	const status = useStateSelector((state) => state.auth.status);

	useEffect(() => {
		if (!isAuthenticated && status != 'init') {
			toggleLoginModalVisibility();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	const { toggleLoginModalVisibility } = useContext(LoginModalContext);

	if (isAuthenticated && isUserDefined(user) && roles.includes(user.role)) {
		return <Outlet />;
	}

	if (!isAuthenticated && status !== 'init' && status !== 'loading') {
		return <Navigate to='/home' replace />;
	}
};
