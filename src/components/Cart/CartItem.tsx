import { FC, useState } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router';
import { CartQuantityChooser } from './CartQuantityChooser';

type CartItemProps = Partial<Product> & {
	pageLink: string;
	className?: string;
	totalPrice: number;
};

export const CartItem: FC<CartItemProps> = ({
	price,
	image,
	imageAlt,
	label,
	pageLink,
	totalPrice,
}) => {
	const [count, setCount] = useState<number>(1);

	const productPrice =
		price &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(price);

	const displayTotalPrice =
		price &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(totalPrice);

	return (
		<>
			<Link to={pageLink}>
				<div className='relative z-0 overflow-hidden flex flex-row'>
					<img
						src={image}
						alt={imageAlt}
						className='object-cover w-[120px] h-[120px] aspect-square'
					/>
					<div className='flex flex-col justify-center items-start m-5'>
						<div className='flex space-x-2'>
							<div className='text-xl'>{label}</div>
						</div>

						<div className='flex gap-x-2 items-center'>
							<div className='font-bold text-sm text-gray-400'>
								{productPrice}
							</div>
						</div>
					</div>
				</div>
			</Link>
			<CartQuantityChooser count={count} setCount={setCount} />
			<div className='flex items-center justify-center'>{displayTotalPrice}</div>
		</>
	);
};
