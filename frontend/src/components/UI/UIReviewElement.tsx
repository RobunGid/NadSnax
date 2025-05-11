import { ReactNode } from 'react';

interface UIReviewElementProps {
	children: ReactNode;
}

export const UIReviewElement = ({ children }: UIReviewElementProps) => {
	return (
		<div className='dark:bg-gray-800 p-6 flex flex-col gap-y-4 h-40 justify-center shadow-xl relative'>
			{children}
		</div>
	);
};
