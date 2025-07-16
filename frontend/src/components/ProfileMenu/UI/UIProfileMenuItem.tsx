import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router';

interface UIProfileMenuItemProps {
	to: string;
	children: ReactNode;
	className?: string;
	type?: 'primary' | 'secondary' | 'control';
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const UIProfileMenuItem = ({
	to,
	children,
	className,
	type,
	onClick,
}: UIProfileMenuItemProps) => {
	return (
		<li>
			<Link
				className={clsx(
					'flex gap-2 px-4',
					(!type || type === 'primary') &&
						'py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white',
					type === 'secondary' &&
						'py-1 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-650 hover:bg-gray-250',
					type === 'control' &&
						'py-3 px-4 font-semibold text-indigo-400 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white',
					className
				)}
				to={to}
				onClick={onClick}
			>
				{children}
			</Link>
		</li>
	);
};
