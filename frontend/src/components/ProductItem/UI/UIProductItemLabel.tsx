import { GiStarFormation } from 'react-icons/gi';

interface UIProductItemLabelProps {
	description: string;
	label: string;
	isBestseller: boolean;
}

export const UIProductItemLabel = ({
	description,
	label,
	isBestseller,
}: UIProductItemLabelProps) => {
	return (
		<>
			<div
				className='text-gray-500 w-52 truncate dark:text-gray-300'
				title={description}
			>
				{description}
			</div>
			<div className='flex text-xs space-x-2 dark:text-gray-600 items-center h-5'>
				<div>{label}</div>
				{isBestseller && (
					<GiStarFormation
						className='text-amber-400'
						title="Customer's choice - Bestseller"
					/>
				)}
			</div>
		</>
	);
};
