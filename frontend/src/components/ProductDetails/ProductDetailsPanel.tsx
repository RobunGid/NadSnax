import { ItemDetails } from '../../types';
import { ProductDetailsPanelItem } from './ProductDetailsPanelItem';
import { UIProductDetailsItemDetails } from './UI/UIProductDetailsItemDetails';

interface ProductDetailsPanelProps {
	itemDetails: ItemDetails;
}
export const ProductDetailsPanel = ({ itemDetails }: ProductDetailsPanelProps) => {
	return (
		<UIProductDetailsItemDetails>
			<ProductDetailsPanelItem.FullDescription text={itemDetails.fullDescription} />
			<ProductDetailsPanelItem.Ingridients text={itemDetails.ingridients} />
			<ProductDetailsPanelItem.Supplier text={itemDetails.supplier} />
			<ProductDetailsPanelItem.Nutrition text={itemDetails.nutrition} />
		</UIProductDetailsItemDetails>
	);
};
