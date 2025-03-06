import { FC } from 'react';
import styles from './CartQuantityChooser.module.css';
import clsx from 'clsx';
import { Item } from '../../types';
import { useSelector } from 'react-redux';
import { selectItemById } from '../../store/cartSelectors';
import { RootState } from '../../store';
import { TfiTrash } from 'react-icons/tfi';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';

interface CartQuantityChooserProps {
	product: Item;
	className?: string;
}

export const CartQuantityChooser: FC<CartQuantityChooserProps> = ({
	product,
	className,
}) => {
	const cartItem = useSelector((state: RootState) => selectItemById(state, product.id));

	const itemCount = cartItem?.count || 1;

	const {
		handleAddItemToCart,
		handleRemoveProductFromCart,
		handleInputChange,
		handleDeleteItemFromCart,
	} = useItemQuantityChooser({ item: product });

	return (
		<div className={clsx('flex justify-center items-center', className)}>
			<div className='flex flex-row justify-center items-center border border-black'>
				<button
					className={clsx(
						itemCount <= 1 && 'cursor-not-allowed text-gray-300',
						'w-12 h-12 hover:bg-gray-200 disabled:hover:bg-white transtion text-bg font-semibold'
					)}
					onClick={handleRemoveProductFromCart}
					disabled={itemCount <= 1}
				>
					-
				</button>
				<input
					type='number'
					value={itemCount}
					onChange={handleInputChange}
					className={clsx(
						styles.input,
						'transition-colors w-12 h-12 flex justify-center text-center hover:bg-gray-200 box-border focus:outline-none focus:border-2 border-gray-400 focus:scale-125 focus:hover:bg-white'
					)}
				/>
				<button
					className={clsx(
						itemCount >= 16 && 'cursor-not-allowed text-gray-300',
						'w-12 h-12 hover:bg-gray-200 disabled:hover:bg-white transition text-bg font-semibold'
					)}
					onClick={handleAddItemToCart}
					disabled={itemCount >= 16}
				>
					+
				</button>
			</div>
			<button
				className='w-12 h-12 flex justify-center items-center hover:scale-110'
				onClick={handleDeleteItemFromCart}
			>
				<TfiTrash size='20' />
			</button>
		</div>
	);
};
