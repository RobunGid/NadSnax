import { ReactNode, useContext } from 'react';
import { UISidebarItem } from '../UI/UISidebarItem';
import { NavbarContext } from '../../context/NavbarContext';

interface SidebarItemContainerProps {
	children: ReactNode;
	className?: string;
	to: string;
}

export const SidebarItemContainer = ({
	children,
	className,
	to,
}: SidebarItemContainerProps) => {
	const { toggleSidebarVisibility } = useContext(NavbarContext);
	return (
		<li onClick={toggleSidebarVisibility}>
			<UISidebarItem to={to} children={children} className={className} />
		</li>
	);
};
