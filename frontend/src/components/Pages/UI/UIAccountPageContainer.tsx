import { ReactNode } from 'react';

interface UIAccountPageContainerProps {
	children: ReactNode;
}

export const UIAccountPageContainer = ({ children }: UIAccountPageContainerProps) => {
	return <div className='p-8 flex gap-8 flex-col lg:flex-row'>{children}</div>;
};
