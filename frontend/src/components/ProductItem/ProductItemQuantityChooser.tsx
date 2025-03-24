import { CartItemType } from '../../types';
import styles from './ProductItemQuantityChooser.module.css';
import { ChangeEvent, EventHandler, MouseEventHandler } from 'react';
import { FiPlus } from 'react-icons/fi';
import clsx from 'clsx';

export type ProductItemQuantityChooserProps = {
	cartItem: CartItemType;
	className?: string;
	onAdd: MouseEventHandler;
	onDelete: MouseEventHandler;
	onRemove: MouseEventHandler;
	onInputChange: EventHandler<ChangeEvent<HTMLInputElement>>;
};

export const ProductItemQuantityChooser = ({
	className,
	cartItem,
	onAdd,
	onRemove,
	onInputChange,
}: ProductItemQuantityChooserProps) => {
	return (
		<div className={className}>
			{!cartItem.count ? (
				<div
					className='dark:bg-sky-800 bg-orange-400 flex w-[100px] absolute justify-center translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
					onClick={onAdd}
				>
					<FiPlus />
					<button>Add</button>
				</div>
			) : (
				<div className='dark:bg-sky-800 bg-orange-400 flex justify-center w-[100px] absolute translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition'>
					<button
						className='dark:hover:bg-sky-900 hover:bg-orange-500 absolute inset-0 w-1/3 hover:rounded-bl-full hover:rounded-tl-full'
						onClick={onAdd}
					>
						+
					</button>
					<div
						className='text-center'
						onClick={(event) => event.preventDefault()}
					>
						<input
							type='number'
							value={cartItem.count}
							className={clsx(
								styles['quantity-chooser-input'],
								'bg-transparent w-1/3 text-center box-border outline-none focus:outline-2 focus:scale-125 focus:outline-amber-700 dark:focus:outline-cyan-700'
							)}
							onChange={onInputChange}
						/>
					</div>
					<button
						className='dark:hover:bg-sky-900 hover:bg-orange-500 absolute top-0 right-0 bottom-0 w-1/3 hover:rounded-tr-full hover:rounded-br-full'
						onClick={onRemove}
					>
						–
					</button>
				</div>
			)}
		</div>
	);
};
