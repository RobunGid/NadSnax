import clsx from 'clsx';
import { PiShoppingCartBold } from 'react-icons/pi';
import { useStateSelector } from '../../store';

interface NavbarCartProps {
	className?: string;
	onClick: () => unknown;
}

export const NavbarCart = ({ className, onClick }: NavbarCartProps) => {
	const productsItems = useStateSelector((state) => state.cart.productList);

	const count = productsItems.reduce((acum, value) => acum + value.count, 0);

	const amount = productsItems.reduce(
		(acum, value) => acum + value.item.price * value.count,
		0
	);

	const displayAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(amount);

	return (
		<button
			className={clsx(
				'flex flex-col items-center justify-center size-16',
				className
			)}
			onClick={onClick}
		>
			<div className='absolute mb-8 ml-5 font-bold text-xs bg-amber-500 dark:bg-sky-600 dark:border-sky-800 min-w-4 min-h-4 rounded-full border border-amber-800 flex justify-center align-center'>
				{count}
			</div>
			<PiShoppingCartBold size={28} />

			<div className='text-xs font-thin'>{displayAmount}</div>
		</button>
	);
};
