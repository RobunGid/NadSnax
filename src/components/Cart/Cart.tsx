import { FC } from 'react';
import { CartItem } from './CartItem';
import { Product } from '../../types';
import { selectAllProducts } from '../../store/cartSelectors';
import { useSelector } from 'react-redux';

const Cart: FC = () => {
	const productsItems: { product: Product; count: number }[] =
		useSelector(selectAllProducts);

	const products: Product[] = productsItems.map(
		(item: { product: Product; count: number }) => item.product
	);

	return (
		<div className='w-[600px] h-[40rem] overflow-auto'>
			<h1 className='text-center'>Your cart</h1>

			<div className='grid grid-cols-[3fr_2fr_1fr] gap-5 min-w-0'>
				<div className='text-gray-500 text-xs text-left'>Product</div>
				<div className='text-gray-500 text-xs text-left'>Quantity</div>
				<div className='text-gray-500 text-xs text-center'>Total price</div>

				{products.map((randomProduct) => (
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
