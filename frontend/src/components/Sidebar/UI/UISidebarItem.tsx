import clsx from 'clsx';
import { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface UISidebarItemProps {
	to: string;
	children: ReactNode;
	className?: string;
}

export const UISidebarItem = ({ to, className, children }: UISidebarItemProps) => {
	return (
		<NavLink
			to={to}
			className={clsx(
				'flex items-center p-2.5 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 group',
				className
			)}
		>
			{children}
		</NavLink>
	);
};
