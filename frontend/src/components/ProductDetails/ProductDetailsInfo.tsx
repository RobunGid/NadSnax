import { formatPrice } from '../../logic/formatPrice';
import { Item } from '../../types';
import { ProductDetailsQuantityChooser } from './ProductDetailsQuantityChooser';
import { ProductDetailsPanel } from './ProductDetailsPanel';
import { UIProductDetailsPrice } from './UI/UIProductDetailsPrice';
import { UIProductDetailsFullLabel } from './UI/UIProductDetailsFullLabel';
import { UIProductDetailsSupplier } from './UIProductDetailsSupplier';
import { UIProductDetailsInfo } from './UI/UIProductDetailsInfo';
import { ProductDetailsAddToFavorite } from './ProductDetailsAddToFavorite';
import { UIProductDetailsRating } from './UI/UIProductDetailsRating';

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

			<UIProductDetailsRating
				ratingCount={item.ratingCount}
				averageRating={item.averageRating}
			/>

			<UIProductDetailsPrice price={formattedPrice} oldPrice={formattedOldPrice} />

			<ProductDetailsQuantityChooser item={item} />

			<ProductDetailsAddToFavorite item={item} />

			<ProductDetailsPanel itemDetails={item.itemDetails} />
		</UIProductDetailsInfo>
	);
};
