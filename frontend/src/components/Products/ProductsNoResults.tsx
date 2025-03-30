import clsx from 'clsx';
import { UIShoppingButton } from '../UI/UIShoppingButton';

interface ProductsNoResultsProps {
	category?: string;
	type?: string;
	className?: string;
}

export const ProductsNoResults = ({
	category,
	type,
	className,
}: ProductsNoResultsProps) => {
	return (
		<div
			className={clsx(
				'text-xl flex items-center justify-center flex-col',
				className
			)}
		>
			{category && type && (
				<h1>
					Sorry, there no products for <span className='font-bold'>{type}</span>{' '}
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
			<UIShoppingButton>Open main products page</UIShoppingButton>
		</div>
	);
};
