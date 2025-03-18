import { FC } from 'react';

interface NoResultsProps {
	category?: string;
	type?: string;
}

export const NoResults: FC<NoResultsProps> = ({ category, type }) => {
	return (
		<div className='text-xl dark:text-white'>
			{category && type && (
				<h1 className='font-bold'>
					Sorry, there no products for {type} in {category}
				</h1>
			)}
			{!type && category && (
				<h1 className='font-bold'>Sorry, there no products in {category}</h1>
			)}
			{!type && !category && (
				<h1 className='font-bold'>Sorry, there no products</h1>
			)}
		</div>
	);
};
