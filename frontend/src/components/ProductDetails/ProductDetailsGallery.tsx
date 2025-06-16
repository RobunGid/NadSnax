import { Image } from '../../types';
import { UIProductDetailsImage } from './UI/UIProductDetailsImage';
import { UIProductDetailsCarousel } from './UI/UIProductDetailsCarousel';
import { UIEventHandler, useRef, useState } from 'react';
import { UIProductDetailsGalleryScrollButton } from './UI/UIProductDetailsGalleryScrollButton';

interface ProductDetailsGalleryProps {
	images: Image[];
}

export const ProductDetailsGallery = ({ images }: ProductDetailsGalleryProps) => {
	const mainImage = images.find((image) => image.isMain);
	const galleryRef = useRef<null | HTMLDivElement>(null);
	const [upButtonVisibilty, setUpButtonVisibilty] = useState<boolean>(false);
	const [downButtonVisibilty, setDownButtonVisibilty] = useState<boolean>(true);

	if (!mainImage) {
		images = [{ ...images[0], isMain: true }, ...images.slice(1)];
	}

	const handleCarouselScroll: UIEventHandler<HTMLDivElement> = (event) => {
		console.log((event.target as HTMLDivElement).scrollTop);
		if ((event.target as HTMLDivElement).scrollTop == 440) {
			setDownButtonVisibilty(false);
		} else {
			setDownButtonVisibilty(true);
		}
		if ((event.target as HTMLDivElement).scrollTop == 0) {
			setUpButtonVisibilty(false);
		} else {
			setUpButtonVisibilty(true);
		}
	};

	const handleClickUpGallery = () => {
		if (galleryRef.current) {
			galleryRef.current.scrollBy({ top: -100, behavior: 'smooth' });
		}
	};

	const handleClickDownGallery = () => {
		if (galleryRef.current) {
			galleryRef.current.scrollBy({ top: 100, behavior: 'smooth' });
		}
	};

	return (
		<>
			<div className='flex flex-col items-center'>
				<UIProductDetailsGalleryScrollButton
					onClick={handleClickUpGallery}
					type='up'
					visibility={upButtonVisibilty}
				/>
				<UIProductDetailsCarousel
					ref={galleryRef}
					onScroll={handleCarouselScroll}
				>
					{images.map((image) => (
						<UIProductDetailsImage
							image={image}
							key={image.id}
							type='small'
						/>
					))}
				</UIProductDetailsCarousel>
				<UIProductDetailsGalleryScrollButton
					onClick={handleClickDownGallery}
					type='down'
					visibility={downButtonVisibilty}
				/>
			</div>
			<UIProductDetailsImage image={mainImage || images[0]} type='big' />
		</>
	);
};
