import clsx from 'clsx';
import { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface UIAccountMenuItem {
	to: string;
	className?: string;
	children: ReactNode;
	isLast?: boolean;
}

export const UIAccountMenuItem = ({
	to,
	className,
	children,
	isLast,
}: UIAccountMenuItem) => {
	return (
		<NavLink
			className={clsx(
				isLast && 'rounded-b-[40px] pb-5',
				'w-full flex py-4 px-8 gap-2 shadow-gray-950 hover:bg-gray-300 dark:hover:bg-gray-700',
				className
			)}
			to={to}
		>
			{children}
		</NavLink>
	);
};
