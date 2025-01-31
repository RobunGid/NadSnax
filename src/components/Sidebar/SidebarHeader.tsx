import { FC } from 'react';
import { SidebarLink } from './SidebarLink';
import { SiteLogo } from '../Navbar/SiteLogo';

const SidebarHeader: FC = () => {
	return (
		<div className='flex items-center justify-start rtl:justify-end'>
			<SidebarLink to='/about'>
				<SiteLogo />
				<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
					NadSnax
				</span>
			</SidebarLink>
		</div>
	);
};

export default SidebarHeader;
