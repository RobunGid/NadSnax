import { ReactNode } from 'react';

interface UIProductDetailsContainerProps {
	children: ReactNode;
}

export const UIProductDetailsContainer = ({
	children,
}: UIProductDetailsContainerProps) => {
	return <div className='w-full flex flex-row justify-center'>{children}</div>;
};
