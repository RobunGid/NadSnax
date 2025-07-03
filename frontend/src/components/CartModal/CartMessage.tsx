import { useTranslate } from '../../i18n/i18n';
import { CartToProductsButton } from './CartToProductsButton';

interface CartMessageProps {
	type: 'empty' | 'success';
}

export const CartMessage = ({ type }: CartMessageProps) => {
	const translate = useTranslate();
	return (
		<div className='col-span-3 flex flex-col items-center mt-48'>
			<div className='text-2xl text-center'>
				{type == 'empty' && translate('cart.message.empty')}
				{type == 'success' && translate('cart.message.success')}
			</div>
			<CartToProductsButton>
				{type == 'empty' && translate('cart.button.empty')}
				{type == 'success' && translate('cart.button.success')}
			</CartToProductsButton>
		</div>
	);
};
