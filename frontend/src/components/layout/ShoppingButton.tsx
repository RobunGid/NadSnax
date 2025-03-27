import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router';

interface ShoppingButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

export const ShoppingButton = ({ onClick, children }: ShoppingButtonProps) => {
	return (
		<Link to='/products' className='mt-10'>
			<button
				className='bg-amber-400 hover:bg-amber-500 dark:bg-sky-800 dark:hover:bg-sky-900 p-3 hover:scale-105 transition'
				onClick={onClick}
			>
				{children}
			</button>
		</Link>
	);
};
