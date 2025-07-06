import clsx from 'clsx';
import { Link } from 'react-router';
import styles from './UIProductItem.module.css';
import { ReactNode } from 'react';

interface UIProductItemProps {
	className?: string;
	pageLink: string;
	children: ReactNode;
	isSmall?: boolean;
}

export const UIProductItem = ({
	pageLink,
	className,
	children,
	isSmall,
}: UIProductItemProps) => {
	return (
		<Link
			to={pageLink}
			className={clsx(
				'shadow-xl w-64 block hover:scale-[102.5%] transition-transform animate-fadeIn opacity-0 rounded-xl overflow-hidden',
				styles['product-item'],
				isSmall ? 'h-64' : 'h-[380px]',
				className
			)}
		>
			{children}
		</Link>
	);
};
