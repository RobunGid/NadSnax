import { ReactNode } from 'react';

interface UIProductDetailsGalleryContainerProps {
	children: ReactNode;
}

export const UIProductDetailsGalleryContainer = ({
	children,
}: UIProductDetailsGalleryContainerProps) => {
	return (
		<div className='flex md:flex-col flex-row items-center justify-center p-4'>
			{children}
		</div>
	);
};
