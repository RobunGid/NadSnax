import clsx from 'clsx';
import { UIToProductsButton } from './UIToProductsButton';
import { MouseEventHandler } from 'react';

interface UIProductsNoResultsProps {
	category?: string;
	type?: string;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UIProductsNoResults = ({
	category,
	type,
	className,
	onClick,
}: UIProductsNoResultsProps) => {
	return (
		<div
			className={clsx(
				'text-xl flex items-center justify-center flex-col',
				className
			)}
		>
			{category && type && (
				<h1>
					Sorry, there no products for <span className='font-bold'>{type}</span>
					in <span className='font-bold'>{category}</span>
				</h1>
			)}
			{!type && category && (
				<h1>
					Sorry, there no products in{' '}
					<span className='font-bold'>{category}</span>
				</h1>
			)}
			{!type && !category && <h1>Sorry, there no products</h1>}
			<UIToProductsButton onClick={onClick}>Open products page</UIToProductsButton>
		</div>
	);
};
