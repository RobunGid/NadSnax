interface UIProductItemPriceProps {
	price: string;
	oldPrice?: string;
}

export const UIProductItemPrice = ({ price, oldPrice }: UIProductItemPriceProps) => {
	return (
		<div className='flex gap-x-2 items-center'>
			{oldPrice ? (
				<>
					<div className='font-bold text-xl text-lime-600'>Now {price}</div>
					<div className='font-bold text-md text-gray-500 line-through'>
						{oldPrice}
					</div>
				</>
			) : (
				<div className='font-bold text-xl'>{price}</div>
			)}
		</div>
	);
};
