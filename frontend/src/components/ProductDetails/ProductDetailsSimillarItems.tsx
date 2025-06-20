import { Item } from '../../types';
import { ProductsList } from '../Layout/ProductsList';

interface ProductDetailsSimillarItemsProps {
	itemList: Item[];
}

export const ProductDetailsSimillarItems = ({
	itemList,
}: ProductDetailsSimillarItemsProps) => {
	return (
		itemList.length != 1 && (
			<div className='p-5 flex flex-col md:block'>
				<span className='text-2xl font-bold dark:text-gray-300 text-center'>
					Simillar items you might like
				</span>

				<div className='flex gap-4 flex-wrap justify-center md:flex-nowrap md:justify-start'>
					<ProductsList items={itemList} />
				</div>
			</div>
		)
	);
};
