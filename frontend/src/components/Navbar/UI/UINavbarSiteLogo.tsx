import { NavLink } from 'react-router';
import { UISiteLogo } from '../../UI/UISiteLogo';

export const UINavbarSiteLogo = () => {
	return (
		<NavLink to='/home'>
			<UISiteLogo />
		</NavLink>
	);
};
