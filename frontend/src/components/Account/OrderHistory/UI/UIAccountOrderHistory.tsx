import { ReactNode } from 'react';

interface UIAccountOrderHistoryProps {
	children: ReactNode;
}

export const UIAccountOrderHistory = ({ children }: UIAccountOrderHistoryProps) => {
	return <div className='flex flex-wrap h-full justify-center'>{children}</div>;
};
