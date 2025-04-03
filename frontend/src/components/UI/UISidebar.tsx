import clsx from 'clsx';
import { ReactNode } from 'react';

interface UISidebarProps {
	className?: string;
	children: ReactNode;
}

export const UISidebar = ({ className, children }: UISidebarProps) => {
	return (
		<div
			className={clsx(
				'md:hidden fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-slate-100 dark:bg-gray-800',
				className
			)}
		>
			{children}
		</div>
	);
};
