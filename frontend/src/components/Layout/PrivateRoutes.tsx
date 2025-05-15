import { Navigate, Outlet } from 'react-router';
import { useStateSelector } from '../../store';

export const PrivateRoutes = () => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);
	const accessTokenStatus = useStateSelector((state) => state.auth.status);
	if (accessToken || accessTokenStatus == 'success') {
		return <Outlet />;
	}
	if (accessTokenStatus == 'error') return <Navigate to='/home' replace />;
};
