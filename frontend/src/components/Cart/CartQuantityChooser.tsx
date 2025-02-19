import { ChangeEvent, EventHandler, FC } from 'react';
import styles from './CartQuantityChooser.module.css';
import clsx from 'clsx';
import { Item } from '../../types';
import { useSelector } from 'react-redux';
import { selectItemById } from '../../store/cartSelectors';
import { RootState, useAppDispatch } from '../../store';
import { changeItemCount, deleteItemFromCart } from '../../store/cartSlice';
import { TfiTrash } from 'react-icons/tfi';

interface CartQuantityChooserProps {
	product: Item;
	className?: string;
}

export const CartQuantityChooser: FC<CartQuantityChooserProps> = ({
	product,
	className,
}) => {
	const dispatch = useAppDispatch();

	const cartItem = useSelector((state: RootState) => selectItemById(state, product.id));

	const itemCount = cartItem?.count || 1;

	const handleRemoveItem = () => {
		dispatch(changeItemCount(product, itemCount - 1));
	};

	const handleAddItem = () => {
		dispatch(changeItemCount(product, itemCount + 1));
	};

	const handleDeleteItem = () => {
		dispatch(deleteItemFromCart(product));
	};

	const handleInputChange: EventHandler<ChangeEvent<HTMLInputElement>> = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		if (Number.isNaN(parseInt(event.target.value))) return;
		dispatch(changeItemCount(product, parseFloat(event.target.value)));
	};
	const handleInputBlur: EventHandler<ChangeEvent<HTMLInputElement>> = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		dispatch(changeItemCount(product, parseFloat(event.target.value)));
	};

	return (
		<div className={clsx('flex justify-center items-center', className)}>
			<div className='flex flex-row justify-center items-center border border-black'>
				<button
					className={clsx(
						itemCount <= 1 && 'cursor-not-allowed text-gray-300',
						'w-12 h-12 hover:bg-gray-200 disabled:hover:bg-white transtion text-bg font-semibold'
					)}
					onClick={handleRemoveItem}
					disabled={itemCount <= 1}
				>
					-
				</button>
				<input
					type='number'
					value={itemCount}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
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
					onClick={handleAddItem}
					disabled={itemCount >= 16}
				>
					+
				</button>
			</div>
			<button
				className='w-12 h-12 flex justify-center items-center hover:scale-110'
				onClick={handleDeleteItem}
			>
				<TfiTrash size='20' />
			</button>
		</div>
	);
};
