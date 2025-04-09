import { Dispatch, SetStateAction } from 'react';
import { CartItem } from './CartItem';
import { useStateSelector } from '../../store';
import { ToProductsButton } from '../Layout/ToProductsButton';

interface CartProps {
	setActive: Dispatch<SetStateAction<boolean>>;
}

export const Cart = ({ setActive }: CartProps) => {
	const cartItems = useStateSelector((state) => state.cart.productList);

	return (
		<div className='w-[20rem] md:w-[40rem] h-[40rem] overflow-auto'>
			<h1 className='text-center text-xl font-semibold'>Cart</h1>

			<div className='grid md:grid-cols-[3fr_2fr_1fr] gap-5 min-w-0 grid-cols-3'>
				{!!cartItems.length && (
					<>
						<div className='text-gray-500 text-xs text-left hidden md:block'>
							Product
						</div>
						<div className='text-gray-500 text-xs text-left hidden md:block'>
							Quantity
						</div>
						<div className='text-gray-500 text-xs text-center hidden md:block'>
							Total price
						</div>
					</>
				)}

				{cartItems.map((cartItem) => (
					<CartItem cartItem={cartItem} key={cartItem.item.id} />
				))}
				{!cartItems.length && (
					<div className='col-span-3 flex flex-col items-center mt-48'>
						<div className='text-2xl text-center'>Your cart is empty</div>
						<ToProductsButton onClick={() => setActive(false)}>
							Go shopping
						</ToProductsButton>
					</div>
				)}
			</div>
		</div>
	);
};
