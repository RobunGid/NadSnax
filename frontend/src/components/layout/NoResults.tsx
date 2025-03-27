import { ShoppingButton } from './ShoppingButton';

interface NoResultsProps {
	category?: string;
	type?: string;
}

export const NoResults = ({ category, type }: NoResultsProps) => {
	return (
		<div className='text-xl flex items-center justify-center flex-col'>
			{category && type && (
				<h1>
					Sorry, there no products for {type} in {category}
				</h1>
			)}
			{!type && category && <h1>Sorry, there no products in {category}</h1>}
			{!type && !category && <h1>Sorry, there no products</h1>}
			<ShoppingButton>Open main products page</ShoppingButton>
		</div>
	);
};
