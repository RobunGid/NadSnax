import { FC, MouseEventHandler } from 'react';
import { Item } from '../../types';
import { FiPlus } from 'react-icons/fi';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';

interface ProductDetailsPageQuantityChooserProps {
	item: Item;
	count: number;
}

export const ProductDetailsPageQuantityChooser: FC<
	ProductDetailsPageQuantityChooserProps
> = ({ item, count }) => {
	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });
	const handleDivClick: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
	};

	return !count ? (
		<div
			className='bg-orange-400 flex w-[200px] cursor-pointer h-[50px] justify-center items-center gap-2 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
			onClick={handleAddItemToCart}
		>
			<FiPlus />
			<button>Add to cart</button>
		</div>
	) : (
		<div className='bg-orange-400 w-[200px] h-[50px] relative flex justify-center rounded-3xl px-3 py-1 font-bold transition'>
			<button
				className='hover:bg-orange-500 absolute inset-0 w-1/3 hover:rounded-bl-full hover:rounded-tl-full'
				onClick={handleAddItemToCart}
			>
				+
			</button>
			<div className='text-center flex justify-center' onClick={handleDivClick}>
				<input
					type='number'
					value={count}
					className='bg-transparent w-1/3 text-center box-border outline-none focus:outline-2 focus:scale-125 focus:outline-amber-700'
					onChange={handleInputChange}
				/>
			</div>
			<button
				className='hover:bg-orange-500 absolute top-0 right-0 bottom-0 w-1/3 hover:rounded-tr-full hover:rounded-br-full'
				onClick={handleRemoveProductFromCart}
			>
				–
			</button>
		</div>
	);
};
