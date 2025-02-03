import { FC } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router';
import { CartQuantityChooser } from './CartQuantityChooser';
import { useSelector } from 'react-redux';
import { selectItemById } from '../../store/cartSelectors';
import { RootState } from '../../store';

type CartItemProps = Product & {
	pageLink: string;
	className?: string;
	totalPrice: number;
};

export const CartItem: FC<CartItemProps> = (product: Product) => {
	const { price, image, imageAlt, label, pageLink, id } = product;
	const productCart = useSelector((state: RootState) => selectItemById(state, id));
	if (productCart) {
		const totalPrice = productCart?.product.price * productCart.count;
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
				<Link to={pageLink} className='overflow-hidden'>
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
				<CartQuantityChooser product={product} className='overflow-hidden' />
				<div className='flex items-center justify-center overflow-hidden'>
					{displayTotalPrice}
				</div>
			</>
		);
	}
};
