import { ReactNode } from 'react';

interface UINavbarNavigation {
	children: ReactNode;
}

export const UINavbarNavigation = ({ children }: UINavbarNavigation) => {
	return (
		<ul className='w-full flex-row hidden lg:flex dark:text-gray-200 divide-x-[1px] divide-gray-300'>
			{children}
		</ul>
	);
};
