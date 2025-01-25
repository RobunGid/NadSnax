import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router';

interface SideBarItemProps {
	children: ReactNode;
	to: string;
}

export const SideBarItem: FC<SideBarItemProps> = ({ children, to }) => {
	return (
		<li>
			<NavLink
				to={to}
				className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
			>
				{children}
			</NavLink>
		</li>
	);
};
