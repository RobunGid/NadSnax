import { formatPrice } from '../../logic/formatPrice';
import { Item } from '../../types';
import { ProductDetailsQuantityChooser } from './ProductDetailsQuantityChooser';
import { ProductDetailsItemDetails } from './ProductDetailsItemDetails';
import { UIProductDetailsPrice } from './UI/UIProductDetailsPrice';
import { ProductDetailsRating } from './ProductDetailsRating';
import { UIProductDetailsFullLabel } from './UI/UIProductDetailsFullLabel';
import { UIProductDetailsSupplier } from './UIProductDetailsSupplier';
import { UIProductDetailsInfo } from './UI/UIProductDetailsInfo';
import { ProductDetailsAddToFavorite } from './ProductDetailsAddToFavorite';

interface ProductDetailsInfo {
	item: Required<Pick<Item, 'itemDetails'>> & Item;
}

export const ProductDetailsInfo = ({ item }: ProductDetailsInfo) => {
	const formattedPrice = formatPrice(item?.price || 0);
	const formattedOldPrice = formatPrice(item?.oldPrice || item?.price || 0);

	return (
		<UIProductDetailsInfo>
			<UIProductDetailsSupplier supplierLink={item.itemDetails.supplier} />

			<UIProductDetailsFullLabel>
				{item.itemDetails.fullLabel}
			</UIProductDetailsFullLabel>

			<ProductDetailsRating
				ratingCount={item.ratingCount}
				averageRating={item.averageRating}
			/>

			<UIProductDetailsPrice price={formattedPrice} oldPrice={formattedOldPrice} />

			<ProductDetailsQuantityChooser item={item} />

			<ProductDetailsAddToFavorite item={item} />

			<ProductDetailsItemDetails
				fullDescription={item.itemDetails.fullDescription}
				ingridients={item.itemDetails.ingridients}
				nutrition={item.itemDetails.ingridients}
				supplier={item.itemDetails.supplier}
			/>
		</UIProductDetailsInfo>
	);
};
