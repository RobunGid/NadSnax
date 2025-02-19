import { FC } from 'react';
import { Item } from '../../types';
import { Link } from 'react-router';
import { CartQuantityChooser } from './CartQuantityChooser';
import { useSelector } from 'react-redux';
import { selectItemById } from '../../store/cartSelectors';
import { RootState } from '../../store';

type CartItemProps = Item & {
	pageLink: string;
	className?: string;
	totalPrice: number;
};

export const CartItem: FC<CartItemProps> = (product: Item) => {
	const { price, imageUrl, label, pageLink, id } = product;
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
				<div className='max-md:col-span-3 relative z-0 overflow-hidden flex flex-col md:flex-row md:items-start'>
					<Link to={pageLink} className='flex flex-col items-center'>
						<div className='text-gray-500 text-xs text-center md:text-left mb-3 block md:hidden'>
							Product
						</div>
						<img
							src={imageUrl}
							alt={`${label} image`}
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
					</Link>
				</div>

				<div className='md:flex md:items-center max-md:col-span-2'>
					<div className='text-gray-500 text-xs text-center mb-3 block md:hidden'>
						Quantity
					</div>
					<CartQuantityChooser product={product} className='overflow-hidden' />
				</div>

				<div className='flex items-center justify-center overflow-hidden flex-col'>
					<div className='text-gray-500 text-xs text-center mb-3 block md:hidden'>
						Total price
					</div>
					<div>{displayTotalPrice}</div>
				</div>
				<hr className='block md:hidden max-md:col-span-3' />
			</>
		);
	}
};
