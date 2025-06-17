import { CartToProductsButton } from './CartToProductsButton';

interface CartMessageProps {
	type: 'empty' | 'success';
}

export const CartMessage = ({ type }: CartMessageProps) => {
	return (
		<div className='col-span-3 flex flex-col items-center mt-48'>
			<div className='text-2xl text-center'>
				{type == 'empty' && 'Your cart is empty'}
				{type == 'success' && 'Sucess! Your order is now being process'}
			</div>
			<CartToProductsButton>
				{type == 'empty' && 'Go shopping'}
				{type == 'success' && 'Order more'}
			</CartToProductsButton>
		</div>
	);
};
