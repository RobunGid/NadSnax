import { ReactNode } from 'react';

interface UIProductItemCoverProps {
	children: ReactNode;
}

export const UIProductItemCover = ({ children }: UIProductItemCoverProps) => {
	return <div className='relative overflow-hidden'>{children}</div>;
};
