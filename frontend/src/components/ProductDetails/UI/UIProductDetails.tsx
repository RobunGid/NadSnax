import { ReactNode } from 'react';

interface UIProductDetailsProps {
	children: ReactNode;
}

export const UIProductDetails = ({ children }: UIProductDetailsProps) => {
	return (
		<div className='p-3 flex flex-col gap-10 pt-16 flex-wrap justify-center md:justify-start dark:text-gray-200'>
			{children}
		</div>
	);
};
