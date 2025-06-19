import { ReactNode } from 'react';

interface UIProductDetailsGalleryProps {
	children: ReactNode;
}

export const UIProductDetailsGallery = ({ children }: UIProductDetailsGalleryProps) => {
	return <div className='flex flex-row justify-center items-center'>{children}</div>;
};
