import { ReactNode } from 'react';

interface UIProductDetailsInfoProps {
	children: ReactNode;
}
export const UIProductDetailsInfo = ({ children }: UIProductDetailsInfoProps) => {
	return (
		<div className='flex flex-col md:mt-20 w-100 px-4 h-[550px] overflow-y-auto scrollbar-stable'>
			{children}
		</div>
	);
};
