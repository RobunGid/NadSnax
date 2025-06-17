import { ReactNode } from 'react';

interface UICartInfoProps {
	children: ReactNode;
}

export const UICartInfo = ({ children }: UICartInfoProps) => {
	return <div className='flex items-center'>{children}</div>;
};
