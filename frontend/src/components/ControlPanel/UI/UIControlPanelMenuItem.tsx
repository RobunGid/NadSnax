import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';
import { NavLink } from 'react-router';

interface UIControlPanelMenuItemProps {
	to: string;
	className?: string;
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const UIControlPanelMenuItem = ({
	to,
	className,
	children,
	onClick,
}: UIControlPanelMenuItemProps) => {
	return (
		<li>
			<NavLink
				className={({ isActive }) =>
					clsx(
						isActive && 'dark:bg-gray-825 dark:hover:bg-gray-750',
						'w-full flex py-4 px-8 gap-2 shadow-gray-950 hover:bg-gray-300 dark:hover:bg-gray-700',
						className
					)
				}
				to={to}
				onClick={onClick}
			>
				{children}
			</NavLink>
		</li>
	);
};
