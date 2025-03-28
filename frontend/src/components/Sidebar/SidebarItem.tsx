import { ReactNode, useContext } from 'react';
import { NavLink } from 'react-router';
import { NavbarContext } from '../../context/NavbarContext';
import clsx from 'clsx';

interface SideBarItemProps {
	children: ReactNode;
	to: string;
	className?: string;
}

export const SidebarItem = ({ children, to, className }: SideBarItemProps) => {
	const { toggleSidebarVisibility } = useContext(NavbarContext);
	return (
		<li onClick={toggleSidebarVisibility}>
			<NavLink
				to={to}
				className={clsx(
					'flex items-center p-2.5 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 group',
					className
				)}
			>
				{children}
			</NavLink>
		</li>
	);
};
