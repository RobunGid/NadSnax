import { ReactNode } from 'react';

interface UIAccountOrderItemProps {
	children: ReactNode;
}

export const UIAccountOrderItem = ({ children }: UIAccountOrderItemProps) => {
	return <div className='flex flex-row border-1 w-60'>{children}</div>;
};
