import { ReactNode, useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
import { UISidebarItem } from '../UI/UISidebarItem';

interface SideBarItemProps {
	children: ReactNode;
	to: string;
	className?: string;
}

export const SidebarItem = ({ children, to, className }: SideBarItemProps) => {
	const { toggleSidebarVisibility } = useContext(NavbarContext);
	return (
		<li onClick={toggleSidebarVisibility}>
			<UISidebarItem to={to} children={children} className={className} />
		</li>
	);
};
