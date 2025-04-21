import { ProductDetailsDropdown } from '../ProductDetailsDropdown';

interface UIProductDetailsItemDetailsProps {
	fullDescription: string;
	ingridients: string;
	supplier: string;
	nutrition: string;
}
export const UIProductDetailsItemDetails = ({
	fullDescription,
	ingridients,
	supplier,
	nutrition,
}: UIProductDetailsItemDetailsProps) => {
	return (
		<div className='flex flex-col gap-y-4 divide-gray-400 divide-y-2'>
			<ProductDetailsDropdown text='About this item'>
				<div className='text-gray-500'>{fullDescription}</div>
			</ProductDetailsDropdown>

			<ProductDetailsDropdown text='Ingridients'>
				<div className='text-gray-500'>{ingridients}</div>
			</ProductDetailsDropdown>

			<ProductDetailsDropdown text='Supplier'>
				<div className='text-gray-500'>{supplier}</div>
			</ProductDetailsDropdown>

			<ProductDetailsDropdown text='Nutrition'>
				<div className='text-gray-500'>{nutrition}</div>
			</ProductDetailsDropdown>
		</div>
	);
};
