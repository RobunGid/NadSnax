import clsx from 'clsx';
import { FC } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';

interface NavbarCartProps {
	className?: string;
}

const NavbarCart: FC<NavbarCartProps> = ({ className }) => {
	return (
		<button
			className={clsx('p-1 flex items-center justify-center size-12', className)}
		>
			<PiShoppingCartBold />
		</button>
	);
};

export default NavbarCart;
