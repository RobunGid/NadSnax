import clsx from 'clsx';
import { formatPrice } from '../../logic/formatPrice';
import { useStateSelector } from '../../store';
import { UINavbarCart } from './UI/UINavbarCart';

interface NavbarCartProps {
	className?: string;
	onClick: () => unknown;
}

export const NavbarCart = ({ className, onClick }: NavbarCartProps) => {
	const productsItems = useStateSelector((state) => state.cart.productList);

	const count = productsItems.reduce((acum, value) => acum + value.count, 0);

	const amount = productsItems.reduce(
		(acum, value) => acum + value.item.convertedPrice * value.count,
		0
	);

	const displayAmount = formatPrice(amount);

	return (
		<UINavbarCart
			amount={displayAmount}
			count={count}
			className={clsx(
				'ml-auto hover:scale-110 mt-1 transition-transform',
				className
			)}
			onClick={onClick}
		/>
	);
};
