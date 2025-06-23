interface UIProductItemLabelProps {
	description: string;
	label: string;
}

export const UIProductItemLabel = ({ description, label }: UIProductItemLabelProps) => {
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
			</div>
		</>
	);
};
