import { ReactNode } from 'react';

interface UIProductItemInfoContainerProps {
	children: ReactNode;
}

export const UIProductItemInfoContainer = ({
	children,
}: UIProductItemInfoContainerProps) => {
	return <div className='px-4 my-2'>{children}</div>;
};
