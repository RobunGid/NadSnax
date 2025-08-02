import { ReactNode } from 'react';

interface UIProductsPageSelectorContainerProps {
	children: ReactNode;
}

export const UIProductsPageSelectorContainer = ({
	children,
}: UIProductsPageSelectorContainerProps) => {
	return <div className='w-full flex justify-center gap-10'>{children}</div>;
};
