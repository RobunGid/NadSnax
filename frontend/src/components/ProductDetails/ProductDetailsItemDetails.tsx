import { ProductDetailsDropdown } from './ProductDetailsDropdown';
import { UIProductDetailsItemDetails } from './UI/UIProductDetailsItemDetails';

interface ProductDetailsItemDetailsProps {
	fullDescription: string;
	ingridients: string;
	supplier: string;
	nutrition: string;
}
export const ProductDetailsItemDetails = ({
	fullDescription,
	ingridients,
	supplier,
	nutrition,
}: ProductDetailsItemDetailsProps) => {
	return (
		<UIProductDetailsItemDetails>
			<ProductDetailsDropdown text='About this item'>
				{fullDescription}
			</ProductDetailsDropdown>
			<ProductDetailsDropdown text='Ingridients'>
				{ingridients}
			</ProductDetailsDropdown>
			<ProductDetailsDropdown text='Supplier'>{supplier}</ProductDetailsDropdown>
			<ProductDetailsDropdown text='Nutrition'>{nutrition}</ProductDetailsDropdown>
		</UIProductDetailsItemDetails>
	);
};
