import { ReactNode } from 'react';

interface UICartOrderInfoProps {
	children: ReactNode;
}

export const UICartOrderInfo = ({ children }: UICartOrderInfoProps) => {
	return <div className='grid grid-cols-2'>{children}</div>;
};
