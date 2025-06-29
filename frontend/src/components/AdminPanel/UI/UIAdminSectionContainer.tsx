import { ReactNode } from 'react';

interface UIAdminSectionContainerProps {
	children: ReactNode;
}

export const UIAdminSectionContainer = ({ children }: UIAdminSectionContainerProps) => {
	return (
		<div className='rounded-[40px] dark:bg-gray-800 bg-gray-200 w-full p-3 flex flex-col'>
			{children}
		</div>
	);
};
