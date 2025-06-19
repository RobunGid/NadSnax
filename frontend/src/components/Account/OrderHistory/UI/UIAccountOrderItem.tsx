import { ReactNode } from 'react';

interface UIAccountOrderItemProps {
	children: ReactNode;
}

export const UIAccountOrderItem = ({ children }: UIAccountOrderItemProps) => {
	return <div className='grid grid-cols-[1fr_2fr_1fr] my-2'>{children}</div>;
};
