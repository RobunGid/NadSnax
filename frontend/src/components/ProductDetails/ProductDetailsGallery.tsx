import { Image } from '../../types';
import { UIProductDetailsImage } from './UI/UIProductDetailsImage';
import { UIProductDetailsGallery } from './UI/UIProductDetailsGallery';
import { useRef } from 'react';

interface ProductDetailsGalleryProps {
	images: Image[];
}

export const ProductDetailsGallery = ({ images }: ProductDetailsGalleryProps) => {
	const mainImage = images.find((image) => image.isMain);
	const galleryRef = useRef<null | HTMLDivElement>(null);

	if (!mainImage) {
		images = [{ ...images[0], isMain: true }, ...images.slice(1)];
	}

	const handleClickUpGallery = () => {
		if (galleryRef.current)
			galleryRef.current.scrollBy({ top: -100, behavior: 'smooth' });
	};

	const handleClickDownGallery = () => {
		if (galleryRef.current) {
			galleryRef.current.scrollBy({ top: 100, behavior: 'smooth' });
			console.log(galleryRef.current.scrollTop);
		}
	};

	return (
		<>
			<div>
				<button onClick={handleClickUpGallery}>Up</button>
				<UIProductDetailsGallery ref={galleryRef}>
					{images.map((image) => (
						<UIProductDetailsImage
							image={image}
							key={image.id}
							type='small'
						/>
					))}
				</UIProductDetailsGallery>
				<button onClick={handleClickDownGallery}>Down</button>
			</div>
			<UIProductDetailsImage image={mainImage || images[0]} type='big' />
		</>
	);
};
