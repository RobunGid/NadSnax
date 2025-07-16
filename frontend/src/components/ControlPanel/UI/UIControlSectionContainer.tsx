import { ReactNode } from 'react';

interface UIControlSectionContainerProps {
	children: ReactNode;
}

export const UIControlSectionContainer = ({
	children,
}: UIControlSectionContainerProps) => {
	return (
		<div className='rounded-[40px] dark:bg-gray-800 bg-gray-200 w-full p-6 flex flex-col'>
			{children}
		</div>
	);
};
