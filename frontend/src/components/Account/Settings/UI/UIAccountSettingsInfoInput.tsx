interface UIAccountSettingsInfoInputProps {
	defaultValue?: string;
	label?: string;
	isUsername?: boolean;
}

export const UIAccountSettingsInfoInput = ({
	defaultValue,
	label,
	isUsername,
}: UIAccountSettingsInfoInputProps) => {
	return (
		<div className='flex flex-col'>
			<label className='text-sm text-gray-500'>{label}</label>
			{isUsername ? (
				<div className='border-1 border-gray-600 rounded-md px-2 py-0.5 focus-within:outline-1'>
					<span className='text-gray-500 mr-0.5'>@</span>
					<input
						className='text-xl font-bold outline-0'
						defaultValue={defaultValue}
					/>
				</div>
			) : (
				<input
					className='text-xl font-bold border-1 border-gray-600 rounded-md py-0.5 px-2'
					defaultValue={defaultValue}
				/>
			)}
		</div>
	);
};
