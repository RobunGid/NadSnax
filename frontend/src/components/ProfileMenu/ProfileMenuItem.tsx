import clsx from 'clsx';
import { ReactNode } from 'react';
import { Link } from 'react-router';

interface ProfileMenuItemProps {
	to: string;
	children: ReactNode;
	className?: string;
	type?: 'primary' | 'secondary';
}

export const ProfileMenuItem = ({
	to,
	children,
	className,
	type,
}: ProfileMenuItemProps) => {
	return (
		<li>
			<Link
				className={clsx(
					'block px-4',
					(!type || type === 'primary') &&
						'py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white',
					type === 'secondary' &&
						'py-1 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-650 hover:bg-gray-250',
					className
				)}
				to={to}
			>
				{children}
			</Link>
		</li>
	);
};
