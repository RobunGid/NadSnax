import clsx from 'clsx';
import { Link } from 'react-router';
import styles from './UIProductItem.module.css';
import { PropsWithChildren } from 'react';

interface UIProductItemProps {
	className?: string;
	pageLink: string;
	isSmall?: boolean;
}

export const UIProductItem = ({
	pageLink,
	className,
	children,
}: PropsWithChildren<UIProductItemProps>) => {
	return (
		<Link
			to={pageLink}
			className={clsx(
				'shadow-xl w-64 block hover:scale-[102.5%] transition-transform animate-fadeIn opacity-0 rounded-xl overflow-hidden h-fit',
				styles['product-item'],
				className
			)}
		>
			{children}
		</Link>
	);
};
