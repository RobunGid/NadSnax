import { UISiteLogo } from '../../UI/UISiteLogo';
import { SidebarLink } from '../SidebarLink';
import { MouseEventHandler } from 'react';

interface UISidebarHeaderProps {
	onClick?: MouseEventHandler<HTMLDivElement>;
}

export const UISidebarHeader = ({ onClick }: UISidebarHeaderProps) => {
	return (
		<div
			onClick={onClick}
			className='flex items-center justify-start rtl:justify-end'
		>
			<SidebarLink to='/home'>
				<UISiteLogo />
				<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap'>
					NadSnax
				</span>
			</SidebarLink>
		</div>
	);
};
