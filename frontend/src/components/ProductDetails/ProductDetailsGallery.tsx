import { Image } from '../../types';
import { UIProductDetailsImage } from './UI/UIProductDetailsImage';
import { UIProductDetailsCarousel } from './UI/UIProductDetailsCarousel';
import { ChangeEvent, UIEventHandler, useRef, useState } from 'react';
import { UIProductDetailsGalleryScrollButton } from './UI/UIProductDetailsGalleryScrollButton';
import { UIProductDetailsGallery } from './UI/UIProductDetailsGallery';
import { UIProductDetailsGalleryContainer } from './UI/UIProductDetailsGalleryContainer';

interface ProductDetailsGalleryProps {
	images: Image[];
}

export const ProductDetailsGallery = ({ images }: ProductDetailsGalleryProps) => {
	const defaultImage = images.find((image) => image.isMain) || images[0];
	const galleryRef = useRef<null | HTMLDivElement>(null);
	const [upButtonVisibilty, setUpButtonVisibilty] = useState<boolean>(false);
	const [downButtonVisibilty, setDownButtonVisibilty] = useState<boolean>(true);
	const [selectedImage, setSelectedImage] = useState<Image>(defaultImage);

	const handleCarouselScroll: UIEventHandler<HTMLDivElement> = (event) => {
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

	const handleChangeSelectedImage = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedImage(
			images.find((image) => image.id == event.target.id) || images[0]
		);
	};

	return (
		<UIProductDetailsGallery>
			<UIProductDetailsGalleryContainer>
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
							onChange={handleChangeSelectedImage}
						/>
					))}
				</UIProductDetailsCarousel>

				<UIProductDetailsGalleryScrollButton
					onClick={handleClickDownGallery}
					type='down'
					visibility={downButtonVisibilty}
				/>
			</UIProductDetailsGalleryContainer>
			<UIProductDetailsImage image={selectedImage} type='big' />
		</UIProductDetailsGallery>
	);
};
