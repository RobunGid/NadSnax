interface UIProductDetailsPriceProps {
	price: string;
	oldPrice?: string;
}
export const UIProductDetailsPrice = ({
	price,
	oldPrice,
}: UIProductDetailsPriceProps) => {
	return oldPrice ? (
		<div className='flex gap-2 mt-4 -mb-4 md:-mb-8 items-center'>
			<div className='font-bold text-xl text-lime-600'>Now {price}</div>
			<div className='font-bold text-md text-gray-500 line-through'>{oldPrice}</div>
		</div>
	) : (
		<div className='font-bold text-xl -mb-4 mt-4 -md:mb-8'>{price}</div>
	);
};
