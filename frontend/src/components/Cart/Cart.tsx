import { Dispatch, SetStateAction } from 'react';
import { CartItem } from './CartItem';
import { CartItemType, Item } from '../../types';
import { selectAllItems } from '../../store/cartSelectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

interface CartProps {
	setActive: Dispatch<SetStateAction<boolean>>;
}

export const Cart = ({ setActive }: CartProps) => {
	const items: CartItemType[] = useSelector(selectAllItems);

	const cartItems: Item[] = items.map((item: CartItemType) => item.item);

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

				{cartItems.map((item) => (
					<CartItem totalPrice={item.price} item={item} key={item.id} />
				))}
				{!cartItems.length && (
					<div className='col-span-3 flex flex-col items-center mt-48'>
						<div className='text-2xl text-center'>Your cart is empty</div>
						<Link to='/products'>
							<button
								className='mt-10 bg-amber-400 hover:bg-amber-500 dark:bg-sky-800 dark:hover:bg-sky-900 w-36 p-3 hover:scale-105 transition'
								onClick={() => setActive(false)}
							>
								Go shopping
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};
