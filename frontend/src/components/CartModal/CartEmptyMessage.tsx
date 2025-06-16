import { CartToProductsButton } from './CartToProductsButton';

export const CartEmptyMessage = () => {
	return (
		<div className='col-span-3 flex flex-col items-center mt-48'>
			<div className='text-2xl text-center'>Your cart is empty</div>
			<CartToProductsButton>Go shopping</CartToProductsButton>
		</div>
	);
};
