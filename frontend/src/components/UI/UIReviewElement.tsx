import clsx from 'clsx';
import { ReactNode } from 'react';

interface UIReviewElementProps {
	children: ReactNode;
	className?: string;
}

export const UIReviewElement = ({ children, className }: UIReviewElementProps) => {
	return (
		<div
			className={clsx(
				'dark:bg-gray-800 p-6 flex flex-col gap-y-4 h-40 justify-center shadow-xl relative',
				className
			)}
		>
			{children}
		</div>
	);
};
