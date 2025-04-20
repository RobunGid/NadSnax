import { Item } from '../../types';
import { ProductDetailsImages } from './ProductDetailsImages';
import { ProductDetailsInfo } from './ProductDetailsInfo';
import { ProductDetailsSimillarItems } from './ProductDetailsSimillarItems';

interface ProductDetailsProps {
	item: Item;
	itemList: Item[];
}

export const ProductDetails = ({ item, itemList }: ProductDetailsProps) => {
	return (
		<div className='p-3 flex flex-row gap-10 pt-16 flex-wrap justify-center md:justify-start dark:text-gray-200'>
			<ProductDetailsImages className='md:ml-8' images={item.images} />
			<ProductDetailsInfo item={item} />
			<ProductDetailsSimillarItems item={item} itemList={itemList} />
		</div>
	);
};
