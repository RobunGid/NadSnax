import { ReactNode } from 'react';

interface UIProductDetailsInfoProps {
	children: ReactNode;
}
export const UIProductDetailsInfo = ({ children }: UIProductDetailsInfoProps) => {
	return <div className='flex flex-col md:mt-20 w-64'>{children}</div>;
};
