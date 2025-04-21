import { UIProductDetailsGallery } from '../UIProductDetailsGallery';
import { UIproductDetailsLoaderImage } from './UIProductDetailsLoaderImage';
import { UIProductDetailsLoaderMainImage } from './UIProductDetailsLoaderMainImage';

export const UIProductDetailsLoaderGallery = () => {
	return (
		<UIProductDetailsGallery>
			<UIproductDetailsLoaderImage className='scale-110' />
			<UIproductDetailsLoaderImage />
			<UIproductDetailsLoaderImage />
			<UIproductDetailsLoaderImage />
			<UIProductDetailsLoaderMainImage />
		</UIProductDetailsGallery>
	);
};
