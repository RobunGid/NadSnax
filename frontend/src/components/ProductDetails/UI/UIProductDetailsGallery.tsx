import { ReactNode } from 'react';

interface UIProductDetailsGalleryProps {
	children: ReactNode;
}

export const UIProductDetailsGallery = ({ children }: UIProductDetailsGalleryProps) => {
	return <div className='flex flex-col items-center justify-center'>{children}</div>;
};
