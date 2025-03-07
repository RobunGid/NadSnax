import { Dispatch, FC, SetStateAction } from 'react';
import { CartItem } from './CartItem';
import { Item } from '../../types';
import { selectAllItems } from '../../store/cartSelectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

interface CartProps {
	setActive: Dispatch<SetStateAction<boolean>>;
}

const Cart: FC<CartProps> = ({ setActive }) => {
	const productsItems: { product: Item; count: number }[] = useSelector(selectAllItems);

	const products: Item[] = productsItems.map(
		(item: { product: Item; count: number }) => item.product
	);

	return (
		<div className='w-[20rem] md:w-[40rem] h-[40rem] overflow-auto'>
			<h1 className='text-center text-xl font-semibold'>Cart</h1>

			<div className='grid md:grid-cols-[3fr_2fr_1fr] gap-5 min-w-0 grid-cols-3'>
				{!!products.length && (
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

				{products.map((item) => (
					<CartItem totalPrice={item.price} item={item} key={item.id} />
				))}
				{!products.length && (
					<div className='col-span-3 flex flex-col items-center mt-48'>
						<div className='text-2xl text-center'>Your cart is empty</div>
						<Link to='/products'>
							<button
								className='mt-10 bg-amber-400 w-36 p-3 hover:scale-105 transition'
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

export default Cart;
