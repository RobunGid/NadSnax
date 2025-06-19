import { ReactNode } from 'react';

interface UIProductDetailsProps {
	children: ReactNode;
}

export const UIProductDetails = ({ children }: UIProductDetailsProps) => {
	return (
		<div className='flex flex-col gap-10 flex-wrap justify-start dark:text-gray-200'>
			{children}
		</div>
	);
};
