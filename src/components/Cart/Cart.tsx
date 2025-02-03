import { FC } from 'react';
import { CartItem } from './CartItem';
import { Product } from '../../types';
import { selectAllProducts } from '../../store/cartSelectors';
import { useSelector } from 'react-redux';

const Cart: FC = () => {
	const products: Product[] = useSelector(selectAllProducts);
	return (
		<div className='w-[600px]'>
			<h1 className='text-center'>Your cart</h1>

			<div className='grid grid-cols-[2fr_1fr_1fr] gap-5'>
				<div className='text-gray-500 text-xs text-left'>Product</div>
				<div className='text-gray-500 text-xs text-left'>Quantity</div>
				<div className='text-gray-500 text-xs text-left'>Total price</div>

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
