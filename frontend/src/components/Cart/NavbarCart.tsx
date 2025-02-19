import clsx from 'clsx';
import { FC } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../store/cartSelectors';
import { Item } from '../../types';

interface NavbarCartProps {
	className?: string;
	onClick: () => unknown;
}

const NavbarCart: FC<NavbarCartProps> = ({ className, onClick }) => {
	const productsItems: { product: Item; count: number }[] = useSelector(selectAllItems);

	const count = productsItems.reduce((acum, value) => acum + value.count, 0);

	const amount = productsItems.reduce(
		(acum, value) => acum + value.product.price * value.count,
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
			<div className='absolute mb-8 ml-5 font-bold text-xs bg-amber-500 w-4 h-4 rounded-full border border-amber-800 flex justify-center align-center'>
				{count}
			</div>
			<PiShoppingCartBold size={28} />

			<div className='text-xs font-thin'>{displayAmount}</div>
		</button>
	);
};

export default NavbarCart;
