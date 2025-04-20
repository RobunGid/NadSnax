import classes from './ProductDetailsGallery.module.css';
import clsx from 'clsx';
import { Image } from '../../types';
import { UIProductDetailsImage } from './UI/UIProductDetailsImage';

interface ProductDetailsGalleryProps {
	images: Image[];
	className?: string;
}

export const ProductDetailsGallery = ({
	images,
	className,
}: ProductDetailsGalleryProps) => {
	return (
		<div
			className={clsx(
				className,
				classes.gallery,
				'grid md:grid-cols-[100px_500px] md:grid-rows-[100px_100px_100px_100px] gap-5 grid-rows-[350px_65px] grid-cols-[repeat(4,_65px)] '
			)}
		>
			{images.map((image) => (
				<UIProductDetailsImage image={image} key={image.id} />
			))}
		</div>
	);
};
