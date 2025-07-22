import clsx from 'clsx';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { NavLink } from 'react-router';

interface UIAccountMenuItem {
	to: string;
	className?: string;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const UIAccountMenuItem = ({
	to,
	className,
	onClick,
	children,
}: PropsWithChildren<UIAccountMenuItem>) => {
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
