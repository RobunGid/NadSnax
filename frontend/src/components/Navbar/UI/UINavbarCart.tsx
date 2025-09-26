import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';

interface UINavbarCartProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	amount: string;
	count: number;
}

export const UINavbarCart = ({
	onClick,
	className,
	count,
	amount,
}: UINavbarCartProps) => {
	return (
		<button
			className={clsx(
				'flex flex-col items-center justify-center size-16',
				className
			)}
			onClick={onClick}
		>
			<div className='absolute mb-8 ms-5 font-bold text-xs bg-amber-500 dark:bg-sky-600 dark:border-sky-800 min-w-4 min-h-4 rounded-full border border-amber-800 flex justify-center align-center'>
				{count}
			</div>
			<PiShoppingCartBold size={28} />

			<div className='text-xs font-thin'>{amount}</div>
		</button>
	);
};
