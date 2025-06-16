import { ReactNode } from 'react';

interface UINavbarNavigation {
	children: ReactNode;
}

export const UINavbarNavigation = ({ children }: UINavbarNavigation) => {
	return (
		<ul className='flex-row hidden md:flex grow dark:text-gray-200 divide-x-[1px] divide-gray-300'>
			{children}
		</ul>
	);
};
