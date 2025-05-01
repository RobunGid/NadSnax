import { ReactNode } from 'react';

interface UINavbarProps {
	children: ReactNode;
}
export const UINavbar = ({ children }: UINavbarProps) => {
	return (
		<div className='w-full border-b-[1px] flex flex-row items-center dark:bg-gray-800 dark:border-gray-700 border-gray-300'>
			{children}
		</div>
	);
};
