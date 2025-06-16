import { CartItemType } from '../../../types';
import clsx from 'clsx';
import styles from './UICartQuantityChooser.module.css';
import { TfiTrash } from 'react-icons/tfi';
import { ChangeEvent, EventHandler, MouseEventHandler } from 'react';

export type UICartQuantityChooserProps = {
	cartItem: CartItemType;
	className?: string;
	onAdd: MouseEventHandler;
	onDelete: MouseEventHandler;
	onRemove: MouseEventHandler;
	onInputChange: EventHandler<ChangeEvent<HTMLInputElement>>;
};

export const UICartQuantityChooser = ({
	className,
	cartItem,
	onAdd,
	onDelete,
	onRemove,
	onInputChange,
}: UICartQuantityChooserProps) => {
	return (
		<div className={clsx('flex justify-center items-center', className)}>
			<div className='flex flex-row w-36 items-center border border-black justify-center'>
				<button
					className={clsx(
						'w-1/3 h-12 hover:bg-gray-200 dark:hover:bg-gray-900 disabled:hover:bg-white transtion text-bg font-semibold dark:disabled:hover:bg-gray-900/40',
						styles['quantity-chooser-button']
					)}
					onClick={onRemove}
					disabled={cartItem.count <= 1}
				>
					-
				</button>
				<input
					type='number'
					value={cartItem.count}
					onChange={onInputChange}
					className={clsx(
						styles['quantity-chooser-input'],
						'transition-colors w-12 h-12 flex text-center hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-gray-900 focus:border-2 border-gray-400 dark:border-slate-500 focus:scale-125 focus:outline-none focus:hover:bg-white dark:focus:hover:bg-gray-700'
					)}
				/>
				<button
					className={clsx(
						'ml-auto w-1/3 h-12 dark:hover:bg-gray-900 hover:bg-gray-200 disabled:hover:bg-white transition text-bg font-semibold dark:disabled:hover:bg-gray-900/40',
						styles['quantity-chooser-button']
					)}
					onClick={onAdd}
					disabled={cartItem.count >= 16}
				>
					+
				</button>
			</div>
			<button
				className='w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform origin-center'
				onClick={onDelete}
			>
				<TfiTrash size='20' />
			</button>
		</div>
	);
};
