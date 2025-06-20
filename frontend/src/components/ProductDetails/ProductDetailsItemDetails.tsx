import { ItemDetails } from '../../types';
import { ProductDetailsDropdown } from './ProductDetailsDropdown';
import { UIProductDetailsItemDetails } from './UI/UIProductDetailsItemDetails';

interface ProductDetailsItemDetailsProps {
	itemDetails: ItemDetails;
}
export const ProductDetailsItemDetails = ({
	itemDetails,
}: ProductDetailsItemDetailsProps) => {
	return (
		<UIProductDetailsItemDetails>
			<ProductDetailsDropdown text='About this item'>
				{itemDetails.fullDescription}
			</ProductDetailsDropdown>
			<ProductDetailsDropdown text='Ingridients'>
				{itemDetails.ingridients}
			</ProductDetailsDropdown>
			<ProductDetailsDropdown text='Supplier'>
				{itemDetails.supplier}
			</ProductDetailsDropdown>
			<ProductDetailsDropdown text='Nutrition'>
				{itemDetails.nutrition}
			</ProductDetailsDropdown>
		</UIProductDetailsItemDetails>
	);
};
