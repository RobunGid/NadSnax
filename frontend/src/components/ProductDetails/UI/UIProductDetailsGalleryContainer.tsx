import { ReactNode } from 'react';

interface UIProductDetailsGalleryContainerProps {
	children: ReactNode;
}

export const UIProductDetailsGalleryContainer = ({
	children,
}: UIProductDetailsGalleryContainerProps) => {
	return <div className='flex flex-col items-center justify-center'>{children}</div>;
};
