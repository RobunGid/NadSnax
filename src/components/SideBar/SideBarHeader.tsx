import { FC } from 'react';
import { SideBarLink } from './SidebarLink';
import { SiteLogo } from '../NavBar/SiteLogo';

const SideBarHeader: FC = () => {
	return (
		<div className='flex items-center justify-start rtl:justify-end'>
			<SideBarLink to='/about'>
				<SiteLogo />
				<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
					NadSnax
				</span>
			</SideBarLink>
		</div>
	);
};

export default SideBarHeader;
