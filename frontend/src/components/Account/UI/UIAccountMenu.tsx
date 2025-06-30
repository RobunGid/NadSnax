import { ReactNode } from 'react';

interface UIAccountMenuProps {
	children: ReactNode;
}
export const UIAccountMenu = ({ children }: UIAccountMenuProps) => {
	return (
		<div className='rounded-[40px] dark:bg-gray-800 bg-gray-200 w-300 max-h-fit overflow-hidden'>
			<ul className='divide-y divide-gray-900'>{children}</ul>
		</div>
	);
};
