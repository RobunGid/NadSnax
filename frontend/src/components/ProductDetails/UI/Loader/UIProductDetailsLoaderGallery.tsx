import { UIProductDetailsCarousel } from '../UIProductDetailsCarousel';
import { UIproductDetailsLoaderImage } from './UIProductDetailsLoaderImage';
import { UIProductDetailsLoaderMainImage } from './UIProductDetailsLoaderMainImage';

export const UIProductDetailsLoaderGallery = () => {
	return (
		<UIProductDetailsCarousel>
			<UIproductDetailsLoaderImage className='scale-110' />
			<UIproductDetailsLoaderImage />
			<UIproductDetailsLoaderImage />
			<UIproductDetailsLoaderImage />
			<UIProductDetailsLoaderMainImage />
		</UIProductDetailsCarousel>
	);
};
