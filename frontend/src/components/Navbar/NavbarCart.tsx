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
		(acum, value) => acum + value.item.price * value.count,
		0
	);

	const displayAmount = formatPrice(amount);

	return (
		<UINavbarCart
			amount={displayAmount}
			count={count}
			className={className}
			onClick={onClick}
		/>
	);
};
