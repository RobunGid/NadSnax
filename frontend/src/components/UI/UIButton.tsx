import { MouseEventHandler, ReactNode } from 'react';

interface UIButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

export const UIButton = ({ onClick, children }: UIButtonProps) => {
	return (
		<button
			className='bg-amber-400 hover:bg-amber-500 dark:bg-sky-800 dark:hover:bg-sky-900 p-3 hover:scale-105 transition'
			onClick={onClick}
		>
			{children}
		</button>
	);
};
