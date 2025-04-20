import { Image } from '../../types';
import { UIProductDetailsImage } from './UI/UIProductDetailsImage';
import { UIProductDetailsGallery } from './UI/UIProductDetailsGallery';

interface ProductDetailsGalleryProps {
	images: Image[];
}

export const ProductDetailsGallery = ({ images }: ProductDetailsGalleryProps) => {
	const mainImage = images.find((image) => image.isMain);

	if (!mainImage) {
		images = [{ ...images[0], isMain: true }, ...images.slice(1)];
	}

	return (
		<UIProductDetailsGallery>
			{images.map((image) => (
				<UIProductDetailsImage image={image} key={image.id} />
			))}
		</UIProductDetailsGallery>
	);
};
