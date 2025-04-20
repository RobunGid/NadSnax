import { Image } from '../../types';
import { UIProductDetailsImage } from './UI/UIProductDetailsImage';
import { UIProductDetailsGallery } from './UI/UIProductDetailsGallery';

interface ProductDetailsGalleryProps {
	images: Image[];
}

export const ProductDetailsGallery = ({ images }: ProductDetailsGalleryProps) => {
	return (
		<UIProductDetailsGallery>
			{images.map((image) => (
				<UIProductDetailsImage image={image} key={image.id} />
			))}
		</UIProductDetailsGallery>
	);
};
