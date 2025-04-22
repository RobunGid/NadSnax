import { UIProductDetailsLoaderGallery } from './UIProductDetailsLoaderGallery';
import { UIProductDetailsLoaderInfo } from './UIProductDetailsLoaderInfo';

export const UIproductDetailsLoader = () => {
	return (
		<div className='p-3 flex flex-row gap-10 pt-16 flex-wrap justify-center md:justify-start dark:text-gray-200'>
			<UIProductDetailsLoaderGallery />
			<UIProductDetailsLoaderInfo />
		</div>
	);
};
