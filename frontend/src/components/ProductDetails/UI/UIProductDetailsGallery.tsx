import { ReactNode } from 'react';

interface UIProductDetailsGalleryProps {
	children: ReactNode;
}

export const UIProductDetailsGallery = ({ children }: UIProductDetailsGalleryProps) => {
	return (
		<div className='flex flex-col md:flex-row justify-center items-center md:m-4'>
			{children}
		</div>
	);
};
