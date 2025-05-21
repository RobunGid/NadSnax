import { Item } from '../../types';
import { ProductsList } from '../Layout/ProductsList';

interface ProductDetailsSimillarItemsProps {
	itemList: Item[];
	item: Item;
}

export const ProductDetailsSimillarItems = ({
	itemList,
	item,
}: ProductDetailsSimillarItemsProps) => {
	return (
		itemList.length != 1 && (
			<div className='p-5'>
				<span className='text-2xl font-bold dark:text-gray-300'>
					Simillar items you might like
				</span>

				<div className='flex gap-4'>
					<ProductsList
						items={itemList.filter(
							//(simmilarItem) => simmilarItem != item
							(simmilarItem) => simmilarItem.id != item.id
						)}
					/>
				</div>
			</div>
		)
	);
};
