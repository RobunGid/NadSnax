interface UIProductItemLabelProps {
	label: string;
}

export const UIProductItemLabel = ({ label }: UIProductItemLabelProps) => {
	return (
		<div
			className='text-gray-500 w-52 dark:text-gray-300 flex gap-x-1 max-h-12 overflow-hidden mb-1'
			title={label}
		>
			{label}
		</div>
	);
};
