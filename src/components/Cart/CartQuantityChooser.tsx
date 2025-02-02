import { ChangeEvent, Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import styles from './CartQuantityChooser.module.css';
import clsx from 'clsx';

interface CartQuantityChooserProps {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
}

export const CartQuantityChooser: FC<CartQuantityChooserProps> = ({
	count,
	setCount,
}) => {
	const [isAddActive, setIsAddActive] = useState<boolean>(true);
	const [isSubActive, setIsSubActive] = useState<boolean>(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleClickSub = () => {
		if (inputRef?.current) {
			const currentValue = parseInt(inputRef.current.value);

			setIsSubActive(currentValue > 2);
			setIsAddActive(currentValue < 12);
		}
		setCount((prev) => prev - 1);
	};

	const handleClickAdd = () => {
		if (inputRef?.current) {
			const currentValue = parseInt(inputRef.current.value);

			setIsSubActive(currentValue > 0);
			setIsAddActive(currentValue < 9);
		}
		setCount((prev) => prev + 1);
	};

	return (
		<div className='flex justify-center items-center'>
			<div className='flex flex-row justify-center items-center border border-black'>
				<button
					className={clsx(
						!isSubActive && 'cursor-not-allowed text-gray-300',
						'w-12 h-12 hover:bg-gray-200 disabled:hover:bg-white transtion text-bg font-semibold'
					)}
					onClick={handleClickSub}
					disabled={!isSubActive}
				>
					-
				</button>
				<input
					ref={inputRef}
					type='number'
					value={count}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						if (Number.isNaN(parseInt(event.target.value))) return;
						setCount(parseFloat(event.target.value));
					}}
					onBlur={(event: ChangeEvent<HTMLInputElement>) => {
						setCount(parseFloat(event.target.value));
						if (parseFloat(event.target.value) > 10) setCount(10);
						if (parseFloat(event.target.value) < 1) setCount(1);
					}}
					className={clsx(
						styles.input,
						'transition-colors w-12 h-12 flex justify-center text-center hover:bg-gray-200 box-border focus:outline-none focus:border-2 border-gray-400 focus:scale-125 focus:hover:bg-white'
					)}
				/>
				<button
					className={clsx(
						!isAddActive && 'cursor-not-allowed text-gray-300',
						'w-12 h-12 hover:bg-gray-200 disabled:hover:bg-white transition text-bg font-semibold'
					)}
					onClick={handleClickAdd}
					disabled={!isAddActive}
				>
					+
				</button>
			</div>
		</div>
	);
};
