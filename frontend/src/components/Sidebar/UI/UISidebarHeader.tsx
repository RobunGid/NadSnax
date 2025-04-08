import { Link } from 'react-router';
import { UISiteLogo } from '../../UI/UISiteLogo';
import { MouseEventHandler } from 'react';

interface UISidebarHeaderProps {
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const UISidebarHeader = ({ onClick }: UISidebarHeaderProps) => {
	return (
		<Link
			to='/home'
			onClick={onClick}
			className='flex items-center justify-start rtl:justify-end'
		>
			<UISiteLogo />
			<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap'>
				NadSnax
			</span>
		</Link>
	);
};
