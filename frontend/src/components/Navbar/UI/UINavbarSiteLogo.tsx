import { NavLink } from 'react-router';
import { SiteLogo } from '../../UI/UISiteLogo';

export const UINavbarSiteLogo = () => {
	return (
		<NavLink to='/home'>
			<SiteLogo />
		</NavLink>
	);
};
