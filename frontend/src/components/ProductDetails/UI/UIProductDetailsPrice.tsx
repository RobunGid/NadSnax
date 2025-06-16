interface UIProductDetailsPriceProps {
	price: string;
	oldPrice?: string;
}
export const UIProductDetailsPrice = ({
	price,
	oldPrice,
}: UIProductDetailsPriceProps) => {
	return oldPrice && oldPrice != price ? (
		<div className='flex gap-2 m-4 items-center'>
			<div className='font-bold text-xl text-lime-600'>Now {price}</div>
			<div className='font-bold text-md text-gray-500 line-through'>{oldPrice}</div>
		</div>
	) : (
		<div className='flex gap-2 m-4 items-center'>
			<div className='font-bold text-xl'>{price}</div>
		</div>
	);
};
