import { ReactNode } from 'react';

interface UIprofileMenuProps {
	children: ReactNode;
}
export const UIProfileMenu = ({ children }: UIprofileMenuProps) => {
	return (
		<ul
			className={`overflow-hidden duration-200 max-h-0
				peer-has-checked:max-h-[500px] 
				absolute right-2 top-16 z-10 bg-gray-200 
				divide-y divide-gray-300 rounded-lg shadow-sm w-44 
				dark:bg-gray-700 dark:divide-gray-600
				group ring-2 dark:ring-gray-800 ring-gray-400`}
		>
			{children}
		</ul>
	);
};
