import clsx from 'clsx';
import { ReactNode } from 'react';

interface UICartContainerProps {
	children: ReactNode;
	bordered?: boolean;
	count?: 2 | 3;
	type?: 'big' | 'small';
}

export const UICartContainer = ({ children, bordered, count }: UICartContainerProps) => {
	return (
		<div
			className={clsx(
				'grid gap-5 min-w-0 max-h-100 overflow-auto p-4',
				bordered && 'border-t-1 dark:border-gray-600',
				(count == 3 || !count) && 'md:grid-cols-[3fr_2fr_1fr] grid-cols-3',
				count == 2 && 'md:grid-cols-[4fr_5fr] grid-cols-2'
			)}
		>
			{children}
		</div>
	);
};
