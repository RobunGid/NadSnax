import { ReactNode } from 'react';

interface UINavbarItemContainerProps {
	children: ReactNode;
}

export const UINavbarItemContainer = ({ children }: UINavbarItemContainerProps) => {
	return <li className='flex-1 max-w-40 flex justify-center relative'>{children}</li>;
};
