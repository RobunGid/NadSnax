import clsx from 'clsx';
import { MouseEventHandler, PropsWithChildren } from 'react';

interface UIButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	type?: 'normal' | 'danger';
	hidden?: boolean;
}

export const UIButton = ({
	onClick,
	className,
	type = 'normal',
	hidden,
	children,
}: PropsWithChildren<UIButtonProps>) => {
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
