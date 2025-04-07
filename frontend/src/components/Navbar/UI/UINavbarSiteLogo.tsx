import { NavLink } from 'react-router';
import { SiteLogo } from '../SiteLogo';

export const UINavbarSiteLogo = () => {
	return (
		<NavLink to='/home'>
			<SiteLogo />
		</NavLink>
	);
};
