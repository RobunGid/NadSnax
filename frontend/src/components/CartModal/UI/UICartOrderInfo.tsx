import { ReactNode } from 'react';

interface UICartOrderInfoProps {
	children: ReactNode;
}

export const UICartOrderInfo = ({ children }: UICartOrderInfoProps) => {
	return <div className='p-4 h-40'>{children}</div>;
};
