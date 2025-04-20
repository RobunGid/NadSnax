import clsx from 'clsx';
import classes from './UIProductDetailsGallery.module.css';
import { ReactNode } from 'react';

interface UIProductDetailsGalleryProps {
	children: ReactNode;
}

export const UIProductDetailsGallery = ({ children }: UIProductDetailsGalleryProps) => {
	return (
		<div
			className={clsx(
				classes.gallery,
				'grid md:grid-cols-[100px_500px] md:grid-rows-[100px_100px_100px_100px] gap-5 grid-rows-[350px_65px] grid-cols-[repeat(4,_65px)] md:ml-8'
			)}
		>
			{children}
		</div>
	);
};
