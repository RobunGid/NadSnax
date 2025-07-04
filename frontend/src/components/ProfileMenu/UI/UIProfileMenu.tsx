import { ReactNode } from 'react';

interface UIprofileMenuProps {
	children: ReactNode;
}
export const UIProfileMenu = ({ children }: UIprofileMenuProps) => {
	return (
		<ul
			className={`overflow-hidden max-h-0 duration-200
				peer-has-checked:max-h-[500px] 
				absolute right-2 top-16 z-10 bg-gray-200 
				divide-y divide-gray-300 rounded-lg shadow-sm w-52
				dark:bg-gray-700 dark:divide-gray-600
				group peer-has-checked:ring-2 dark:ring-gray-800 ring-gray-400`}
		>
			{children}
		</ul>
	);
};
