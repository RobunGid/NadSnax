import { Navigate, Outlet } from 'react-router';
import { useStateSelector } from '../../store';
import { LoginModalContext } from '../../context/LoginModalContext';
import { useContext, useEffect } from 'react';

export const PrivateRoutes = () => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);
	const accessTokenStatus = useStateSelector((state) => state.auth.status);
	useEffect(() => {
		if (accessTokenStatus == 'error') {
			toggleLoginModalVisibility();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessTokenStatus]);
	const { toggleLoginModalVisibility } = useContext(LoginModalContext);
	if (accessToken || accessTokenStatus == 'success') {
		return <Outlet />;
	}
	if (accessTokenStatus == 'error') {
		return <Navigate to='/home' replace />;
	}
};
