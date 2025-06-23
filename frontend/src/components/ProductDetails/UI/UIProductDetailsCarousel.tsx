import clsx from 'clsx';
import classes from './UIProductDetailsCarousel.module.css';
import { forwardRef, MutableRefObject, ReactNode, UIEventHandler } from 'react';

interface UIProductDetailsCarouselProps {
	children: ReactNode;
	ref: MutableRefObject<HTMLDivElement | null>;
	onScroll?: UIEventHandler<HTMLDivElement>;
}

export const UIProductDetailsCarousel = forwardRef<
	HTMLDivElement,
	UIProductDetailsCarouselProps
>(({ children, onScroll }, ref) => {
	return (
		<div
			ref={ref}
			onScroll={onScroll}
			className={clsx(
				classes.gallery,
				'h-[440px] w-[150px] overflow-y-scroll snap-y flex flex-col items-center gap-4 py-2 no-scrollbar'
			)}
		>
			{children}
		</div>
	);
});
