import clsx from 'clsx';
import { PropsWithChildren, RefObject } from 'react';

interface UISidebarProps {
	className?: string;
	ref?: RefObject<HTMLDivElement | null>;
}

export const UISidebar = ({
	className,
	children,
	ref,
}: PropsWithChildren<UISidebarProps>) => {
	return (
		<div
			className={clsx(
				'lg:hidden fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-slate-100 dark:bg-gray-800',
				className
			)}
			ref={ref}
		>
			{children}
		</div>
	);
};
