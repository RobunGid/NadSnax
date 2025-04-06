import { ReactNode } from 'react';

interface UIAccountSection {
	children: ReactNode;
}

export const UIAccountSection = ({ children }: UIAccountSection) => {
	return (
		<div className='rounded-[40px] dark:bg-gray-800 bg-gray-200 w-full p-5'>
			{children}
		</div>
	);
};
