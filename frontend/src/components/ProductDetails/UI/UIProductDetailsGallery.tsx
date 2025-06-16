import clsx from 'clsx';
import classes from './UIProductDetailsGallery.module.css';
import { forwardRef, MutableRefObject, ReactNode } from 'react';

interface UIProductDetailsGalleryProps {
	children: ReactNode;
	ref: MutableRefObject<HTMLDivElement | null>;
}

export const UIProductDetailsGallery = forwardRef<
	HTMLDivElement,
	UIProductDetailsGalleryProps
>(({ children }, ref) => {
	return (
		<div
			ref={ref}
			className={clsx(
				classes.gallery,

				'h-[440px] w-[150px] overflow-y-scroll snap-y flex flex-col items-center gap-4 py-2 no-scrollbar'
			)}
		>
			{children}
		</div>
	);
});
