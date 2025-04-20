import { formatPrice } from '../../logic/formatPrice';
import { Item } from '../../types';
import { ProductRating } from '../Layout/ProductRating';
import { ProductDetailsQuantityChooser } from './ProductDetailsQuantityChooser';
import { UIProductDetailsAddToFavourite } from './UI/UIProductDetailsAddToFavourite';
import { UIProductDetailsPageItemDetails } from './UI/UIProductDetailsPageItemDetails';
import { UIProductDetailsPrice } from './UI/UIProductDetailsPrice';

interface ProductDetailsInfo {
	item: Item;
}

export const ProductDetailsInfo = ({ item }: ProductDetailsInfo) => {
	const formattedPrice = formatPrice(item?.price || 0);
	const formattedOldPrice = formatPrice(item?.oldPrice || item?.price || 0);
	return (
		<div className='flex flex-col md:mt-20 w-64'>
			<div>
				<a
					href={item?.itemDetails?.supplierLink}
					target='_blank'
					className='font-thin underline underline-offset-2'
				>
					Visit the supplier site
				</a>
			</div>
			<div className='text-nowrap'>{item?.itemDetails?.fullLabel}</div>
			<div className='flex'>
				<ProductRating
					rating={item.averageRating}
					className='flex text-yellow-500'
				/>
				<div>{item.ratingCount}</div>
			</div>

			<UIProductDetailsPrice price={formattedPrice} oldPrice={formattedOldPrice} />

			<div className='md:mt-14 mt-6 md:h-80'>
				<ProductDetailsQuantityChooser item={item} />

				<UIProductDetailsAddToFavourite />

				<UIProductDetailsPageItemDetails
					fullDescription={item.itemDetails.fullDescription}
					ingridients={item.itemDetails.ingridients}
					nutrition={item.itemDetails.ingridients}
					supplier={item.itemDetails.supplier}
				/>
			</div>
		</div>
	);
};
