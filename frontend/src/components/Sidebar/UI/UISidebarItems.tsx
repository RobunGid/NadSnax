import { ReactNode } from 'react';

interface UISidebarItemsProps {
	children: ReactNode;
}
export const UISidebarItems = ({ children }: UISidebarItemsProps) => {
	return (
		<div className='py-4 overflow-y-auto pointer-events-auto'>
			<ul className='space-y-1 font-medium'>{children}</ul>
		</div>
	);
};
