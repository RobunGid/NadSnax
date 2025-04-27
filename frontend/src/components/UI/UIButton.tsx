import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

interface UIButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
	className?: string;
}

export const UIButton = ({ onClick, children, className }: UIButtonProps) => {
	return (
		<button
			className={clsx(
				'bg-amber-400 hover:bg-amber-500 dark:bg-sky-800 dark:hover:bg-sky-900 p-3 hover:scale-105 transition',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
