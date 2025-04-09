import { Link } from 'react-router';
import { Item } from '../../../types';
import { CartQuantityChooser } from '../CartQuantityChooser';

interface UICartItemProps {
	item: Item;
	mainImageUrl: string;
	totalPrice: string;
}
export const UICartItem = ({ item, mainImageUrl, totalPrice }: UICartItemProps) => {
	return (
		<>
			<div className='max-md:col-span-3 relative z-0 overflow-hidden flex flex-col md:flex-row md:items-start'>
				<Link
					to={`/products/page${item.pageLink}`}
					className='flex flex-col items-center'
				>
					<div className='text-gray-500 text-xs text-center md:text-left mb-3 block md:hidden'>
						Product
					</div>
					<img
						src={mainImageUrl}
						alt={`${item.label} image`}
						className='object-cover w-[120px] h-[120px] aspect-square'
					/>
					<div className='flex flex-col justify-center items-start m-5'>
						<div className='flex space-x-2'>
							<div className='text-xl'>{item.label}</div>
						</div>

						<div className='flex gap-x-2 items-center'>
							<div className='font-bold text-sm text-gray-400'>
								{totalPrice}
							</div>
						</div>
					</div>
				</Link>
			</div>

			<div className='md:flex md:items-center max-md:col-span-2'>
				<div className='text-gray-500 text-xs text-center mb-3 block md:hidden'>
					Quantity
				</div>
				<CartQuantityChooser item={item} />
			</div>

			<div className='flex items-center justify-center overflow-hidden flex-col'>
				<div className='text-gray-500 text-xs text-center mb-3 block md:hidden'>
					Total price
				</div>
				<div>{totalPrice}</div>
			</div>
			<hr className='block md:hidden max-md:col-span-3' />
		</>
	);
};
