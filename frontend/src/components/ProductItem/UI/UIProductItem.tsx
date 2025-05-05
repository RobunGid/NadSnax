import clsx from 'clsx';
import { Link } from 'react-router';
import styles from './UIProductItem.module.css';
import { ReactNode } from 'react';

interface UIProductItemProps {
	className?: string;
	pageLink: string;
	children: ReactNode;
}

export const UIProductItem = ({ pageLink, className, children }: UIProductItemProps) => {
	return (
		<Link
			to={`/products/page${pageLink}`}
			className={clsx(
				'shadow-xl h-[360px] p-2 w-60 block hover:scale-[102.5%] transition-transform animate-fadeIn opacity-0',
				className,
				styles['product-item']
			)}
		>
			{children}
		</Link>
	);
};
