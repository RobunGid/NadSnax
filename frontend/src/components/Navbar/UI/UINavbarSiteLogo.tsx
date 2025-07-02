import { NavLink } from 'react-router';
import { UISiteLogo } from '../../UI/UISiteLogo';

export const UINavbarSiteLogo = () => {
	return (
		<NavLink to='/home' className='min-w-[60] min-h-[60] shrink-0'>
			<UISiteLogo />
		</NavLink>
	);
};
