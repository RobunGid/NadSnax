interface UIProductItemPriceProps {
	price: string;
	oldPrice?: string;
	discount: number;
}

export const UIProductItemPrice = ({
	price,
	oldPrice,
	discount,
}: UIProductItemPriceProps) => {
	console.log(discount);

	return (
		<div className='flex gap-x-1.5 items-center'>
			{oldPrice ? (
				<>
					<div className='font-bold text-lg text-lime-600'>{price}</div>
					<div className='text-xs text-gray-400 line-through'>{oldPrice}</div>
					<div className='text-sm text-lime-500'>-{discount}%</div>
				</>
			) : (
				<div className='font-bold text-lg'>{price}</div>
			)}
		</div>
	);
};
