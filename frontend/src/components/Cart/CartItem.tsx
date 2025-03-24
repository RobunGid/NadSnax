import { Item } from '../../types';
import { Link } from 'react-router';
import { CartQuantityChooser } from './CartQuantityChooser';
import { useSelector } from 'react-redux';
import { selectItemById } from '../../store/cartSelectors';
import { RootState } from '../../store';

type CartItemProps = {
	className?: string;
	item: Item;
	totalPrice: number;
};

export const CartItem = ({ item }: CartItemProps) => {
	const productCart = useSelector((state: RootState) => selectItemById(state, item.id));
	if (productCart) {
		const totalPrice = productCart?.product.price * productCart.count;

		const mainImage = item.images.find((image) => image.isMain);

		const mainImageUrl = mainImage ? mainImage.url : item.images[0].url;

		const priceIntl = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		});

		return (
			<>
				<div className='max-md:col-span-3 relative z-0 overflow-hidden flex flex-col md:flex-row md:items-start'>
					<Link
						to={`/products/page${item.pageLink}`}
						className='flex flex-col items-center'
					>
						<div className='text-gray-500 text-xs text-center md:text-left mb-3 block md:hidden'>
							Product
						</div>
						<img
							src={mainImageUrl}
							alt={`${item.label} image`}
							className='object-cover w-[120px] h-[120px] aspect-square'
						/>
						<div className='flex flex-col justify-center items-start m-5'>
							<div className='flex space-x-2'>
								<div className='text-xl'>{item.label}</div>
							</div>

							<div className='flex gap-x-2 items-center'>
								<div className='font-bold text-sm text-gray-400'>
									{priceIntl.format(item.price)}
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className='md:flex md:items-center max-md:col-span-2'>
					<div className='text-gray-500 text-xs text-center mb-3 block md:hidden'>
						Quantity
					</div>
					<CartQuantityChooser product={item} className='overflow-hidden' />
				</div>

				<div className='flex items-center justify-center overflow-hidden flex-col'>
					<div className='text-gray-500 text-xs text-center mb-3 block md:hidden'>
						Total price
					</div>
					<div>{priceIntl.format(totalPrice)}</div>
				</div>
				<hr className='block md:hidden max-md:col-span-3' />
			</>
		);
	}
};
