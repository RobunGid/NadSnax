import clsx from 'clsx';
import { ReactNode } from 'react';

interface UIReviewElementContainerProps {
	children: ReactNode;
	className?: string;
}

export const UIReviewElementContainer = ({
	children,
	className,
}: UIReviewElementContainerProps) => {
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
