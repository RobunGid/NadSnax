import { ReactNode } from 'react';

interface UINavbarDropdownProps {
	children: ReactNode;
}

export const UINavbarDropdown = ({ children }: UINavbarDropdownProps) => {
	return (
		<div className='z-10 ring-2 dark:ring-gray-800 ring-gray-400 flex-col absolute bg-white dark:bg-gray-700 scale-y-0 peer-hover:scale-y-100 border-gray-300 peer-focus-within:scale-y-100 origin-top transition-transform hover:scale-y-100 top-8'>
			<ul className='flex flex-col gap-4 p-6'>{children}</ul>
		</div>
	);
};
