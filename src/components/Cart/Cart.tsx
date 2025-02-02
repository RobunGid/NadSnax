import { FC } from 'react';
import { products } from '../../mock';
import { CartItem } from './CartItem';

const Cart: FC = () => {
	const getRandomNumber = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min) + min);

	const getRandomId = () => {
		const randomId = getRandomNumber(0, products.length - 1);
		return randomId.toString().padStart(4, '0');
	};

	const randomIds = [getRandomId(), getRandomId(), getRandomId()];

	const randomProducts = products.filter((product) => randomIds.includes(product.id));

	return (
		<div className='w-[600px]'>
			<h1 className='text-center'>Your cart</h1>

			<div className='grid grid-cols-[2fr_1fr_1fr] gap-5'>
				<div className='text-gray-500 text-xs text-left'>Product</div>
				<div className='text-gray-500 text-xs text-left'>Quantity</div>
				<div className='text-gray-500 text-xs text-left'>Total price</div>

				{randomProducts.map((randomProduct) => (
					<CartItem
						totalPrice={randomProduct.price}
						{...randomProduct}
						key={randomProduct.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Cart;
