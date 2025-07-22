import { PropsWithChildren, useContext } from 'react';
import { UISidebarItem } from './UI/UISidebarItem';
import { NavbarContext } from '../../context/NavbarContext';

interface SidebarItemContainerProps {
	className?: string;
	to: string;
}

export const SidebarItemContainer = ({
	children,
	className,
	to,
}: PropsWithChildren<SidebarItemContainerProps>) => {
	const { toggleSidebarVisibility } = useContext(NavbarContext);
	return (
		<li onClick={toggleSidebarVisibility}>
			<UISidebarItem to={to} children={children} className={className} />
		</li>
	);
};
