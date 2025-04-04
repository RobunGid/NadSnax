import { SidebarLink } from './SidebarLink';
import { SiteLogo } from '../Navbar/SiteLogo';
import { MouseEventHandler } from 'react';

interface SidebarHeaderProps {
	onClick?: MouseEventHandler<HTMLDivElement>;
}

export const SidebarHeader = ({ onClick }: SidebarHeaderProps) => {
	return (
		<div
			onClick={onClick}
			className='flex items-center justify-start rtl:justify-end'
		>
			<SidebarLink to='/home'>
				<SiteLogo />
				<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap'>
					NadSnax
				</span>
			</SidebarLink>
		</div>
	);
};
