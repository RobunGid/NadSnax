import { ReactNode } from 'react';

interface UIProductDetailsItemDetailsProps {
	children: ReactNode;
}

export const UIProductDetailsItemDetails = ({
	children,
}: UIProductDetailsItemDetailsProps) => {
	return (
		<div className='flex flex-col gap-y-2 divide-gray-400 divide-y-2'>{children}</div>
	);
};
