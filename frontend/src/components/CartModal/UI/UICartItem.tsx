import { Link } from 'react-router';
import { CartItemType } from '../../../types';
import { UICartQuantityChooser } from './UICartQuantityChooser';
import { ChangeEvent, EventHandler, MouseEventHandler } from 'react';

interface UICartItemProps {
	cartItem: CartItemType;
	mainImageUrl: string;
	totalPrice: string;
	handleAddItemToCart: MouseEventHandler;
	handleRemoveProductFromCart: MouseEventHandler;
	handleInputChange: EventHandler<ChangeEvent<HTMLInputElement>>;
	handleDeleteItemFromCart: MouseEventHandler;
}
export const UICartItem = ({
	cartItem,
	mainImageUrl,
	totalPrice,
	handleAddItemToCart,
	handleDeleteItemFromCart,
	handleInputChange,
	handleRemoveProductFromCart,
}: UICartItemProps) => {
	return (
		<>
			<div className='max-md:col-span-3 relative z-0 overflow-hidden flex flex-col md:flex-row md:items-start w-70'>
				<Link
					to={`/products/page/${cartItem.item.name}`}
					className='flex flex-col items-center'
				>
					<div className='text-gray-500 text-xs text-center md:text-left mb-3 block md:hidden'>
						Product
					</div>
					<img
						src={mainImageUrl}
						alt={`${cartItem.item.label} image`}
						className='object-cover w-[120px] h-[120px] aspect-square'
					/>
					<div className='flex flex-col justify-center items-start m-5'>
						<div className='flex space-x-2'>
							<div className='text-xl'>{cartItem.item.label}</div>
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
				<UICartQuantityChooser
					cartItem={cartItem}
					onAdd={handleAddItemToCart}
					onDelete={handleDeleteItemFromCart}
					onInputChange={handleInputChange}
					onRemove={handleRemoveProductFromCart}
				/>
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
