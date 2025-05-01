import { ReactNode } from 'react';

interface UINavbarDropdownProps {
	children: ReactNode;
}

export const UINavbarDropdown = ({ children }: UINavbarDropdownProps) => {
	return (
		<div className='flex-col absolute bg-white dark:bg-gray-700 scale-y-0 border dark:border-gray-500 peer-hover:scale-y-100 border-gray-300 peer-focus-within:scale-y-100 origin-top transition-transform hover:scale-y-100'>
			<ul className='flex flex-col gap-4 p-6 w-36'>{children}</ul>
		</div>
	);
};
