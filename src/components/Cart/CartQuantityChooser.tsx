import { ChangeEvent, EventHandler, FC } from 'react';
import styles from './CartQuantityChooser.module.css';
import clsx from 'clsx';
import { Product } from '../../types';
import { useSelector } from 'react-redux';
import { selectProductById } from '../../store/cartSelectors';
import { RootState, useAppDispatch } from '../../store';
import { changeProductCount } from '../../store/cartSlice';

interface CartQuantityChooserProps {
	product: Product;
}

export const CartQuantityChooser: FC<CartQuantityChooserProps> = ({ product }) => {
	const dispatch = useAppDispatch();

	const productItem = useSelector((state: RootState) =>
		selectProductById(state, product.id)
	);

	const productCount = productItem?.count || 1;

	const handleClickSub = () => {
		dispatch(changeProductCount(product, productCount - 1));
	};

	const handleClickAdd = () => {
		dispatch(changeProductCount(product, productCount + 1));
	};

	const handleInputChange: EventHandler<ChangeEvent<HTMLInputElement>> = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		if (Number.isNaN(parseInt(event.target.value))) return;
		dispatch(changeProductCount(product, parseFloat(event.target.value)));
	};
	const handleInputBlur: EventHandler<ChangeEvent<HTMLInputElement>> = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		dispatch(changeProductCount(product, parseFloat(event.target.value)));
	};

	return (
		<div className='flex justify-center items-center'>
			<div className='flex flex-row justify-center items-center border border-black'>
				<button
					className={clsx(
						productCount <= 1 && 'cursor-not-allowed text-gray-300',
						'w-12 h-12 hover:bg-gray-200 disabled:hover:bg-white transtion text-bg font-semibold'
					)}
					onClick={handleClickSub}
					disabled={productCount <= 1}
				>
					-
				</button>
				<input
					type='number'
					value={productCount}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
					className={clsx(
						styles.input,
						'transition-colors w-12 h-12 flex justify-center text-center hover:bg-gray-200 box-border focus:outline-none focus:border-2 border-gray-400 focus:scale-125 focus:hover:bg-white'
					)}
				/>
				<button
					className={clsx(
						productCount >= 16 && 'cursor-not-allowed text-gray-300',
						'w-12 h-12 hover:bg-gray-200 disabled:hover:bg-white transition text-bg font-semibold'
					)}
					onClick={handleClickAdd}
					disabled={productCount >= 16}
				>
					+
				</button>
			</div>
		</div>
	);
};
