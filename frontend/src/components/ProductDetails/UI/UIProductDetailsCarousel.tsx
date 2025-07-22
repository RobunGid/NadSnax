import clsx from 'clsx';
import classes from './UIProductDetailsCarousel.module.css';
import { forwardRef, PropsWithChildren, RefObject, UIEventHandler } from 'react';

interface UIProductDetailsCarouselProps {
	ref: RefObject<HTMLDivElement | null>;
	onScroll?: UIEventHandler<HTMLDivElement>;
}

export const UIProductDetailsCarousel = forwardRef<
	HTMLDivElement,
	PropsWithChildren<UIProductDetailsCarouselProps>
>(({ children, onScroll }, ref) => {
	return (
		<div
			ref={ref}
			onScroll={onScroll}
			className={clsx(
				classes.gallery,
				'md:h-[440px] md:w-[150px] w-[270px] p-4 overflow-x-scroll md:overflow-y-scroll md:snap-y snap-x flex flex-row md:flex-col items-center gap-4 py-2 no-scrollbar'
			)}
		>
			{children}
		</div>
	);
});
