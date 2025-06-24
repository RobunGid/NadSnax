import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';
import { NavLink } from 'react-router';

interface UIAdminPanelMenuItemProps {
	to: string;
	className?: string;
	children: ReactNode;
	isLast?: boolean;
	isFirst?: boolean;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const UIAdminPanelMenuItem = ({
	to,
	className,
	children,
	isLast,
	isFirst,
	onClick,
}: UIAdminPanelMenuItemProps) => {
	return (
		<li>
			<NavLink
				className={({ isActive }) =>
					clsx(
						isActive && 'dark:bg-gray-825 dark:hover:bg-gray-750',
						isLast && 'rounded-b-[40px] pb-5',
						isFirst && 'rounded-t-[40px] pt-5',
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
