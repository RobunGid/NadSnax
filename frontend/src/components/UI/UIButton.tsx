import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

interface UIButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
	className?: string;
	type?: 'normal' | 'danger';
	hidden?: boolean;
}

export const UIButton = ({
	onClick,
	children,
	className,
	type = 'normal',
	hidden,
}: UIButtonProps) => {
	return (
		<button
			className={clsx(
				'p-3 hover:scale-103 transition',
				type == 'danger' && 'bg-red-800 hover:bg-red-900',
				(type == 'normal' || !type) &&
					'bg-amber-400 hover:bg-amber-500 dark:bg-sky-800 dark:hover:bg-sky-900',
				hidden && 'opacity-0 pointer-events-none',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
