import { FC, MouseEventHandler } from 'react';
import { FiPlus } from 'react-icons/fi';
import { RootState } from '../../store';

import { selectItemById } from '../../store/cartSelectors';
import { useSelector } from 'react-redux';
import { Item } from '../../types';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';

interface ProductItemQuantityChooserProps {
	item: Item;
}

const ProductItemQuantityChooser: FC<ProductItemQuantityChooserProps> = ({ item }) => {
	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	const handleDivClick: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
	};

	const productCart = useSelector((state: RootState) => selectItemById(state, item.id));

	const count = productCart?.count || 0;

	return !count ? (
		<div
			className='bg-orange-400 flex w-[100px] absolute justify-center translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
			onClick={handleAddItemToCart}
		>
			<FiPlus />
			<button>Add</button>
		</div>
	) : (
		<div className='bg-orange-400 flex justify-center w-[100px] absolute translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition'>
			<button
				className='hover:bg-orange-500 absolute inset-0 w-1/3 hover:rounded-bl-full hover:rounded-tl-full'
				onClick={handleAddItemToCart}
			>
				+
			</button>
			<div className='text-center' onClick={handleDivClick}>
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

export default ProductItemQuantityChooser;
