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

	const hideButtons = images.length > 4;

	const handleCarouselScroll: UIEventHandler<HTMLDivElement> = (event) => {
		const isVertical = window.innerWidth >= 768;
		if (isVertical) {
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
			return;
		} else {
			console.log((event.target as HTMLDivElement).scrollLeft);
			if (
				(event.target as HTMLDivElement).scrollLeft > 620 &&
				(event.target as HTMLDivElement).scrollLeft < 630
			) {
				setDownButtonVisibilty(false);
			} else {
				setDownButtonVisibilty(true);
			}

			if ((event.target as HTMLDivElement).scrollLeft == 0) {
				setUpButtonVisibilty(false);
			} else {
				setUpButtonVisibilty(true);
			}
		}
	};

	const handleClickUpGallery = () => {
		const isVertical = window.innerWidth >= 768;

		const topScrollValue = isVertical ? -100 : 0;
		const leftScrollValue = isVertical ? 0 : -100;

		if (galleryRef.current) {
			galleryRef.current.scrollBy({
				top: topScrollValue,
				left: leftScrollValue,
				behavior: 'smooth',
			});
		}
	};

	const handleClickDownGallery = () => {
		const isVertical = window.innerWidth >= 768;

		const topScrollValue = isVertical ? 100 : 0;
		const leftScrollValue = isVertical ? 0 : 100;

		if (galleryRef.current) {
			galleryRef.current.scrollBy({
				top: topScrollValue,
				behavior: 'smooth',
				left: leftScrollValue,
			});
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
					visibility={upButtonVisibilty && hideButtons}
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
					visibility={downButtonVisibilty && hideButtons}
				/>
			</UIProductDetailsGalleryContainer>
			<UIProductDetailsImage image={selectedImage} type='big' />
		</UIProductDetailsGallery>
	);
};
