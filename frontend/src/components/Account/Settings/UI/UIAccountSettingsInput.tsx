import { ChangeEventHandler } from 'react';

type UIAccountSettingsInputProps = {
	label?: string;
	isUsername?: boolean;
	name?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	minLength?: number;
	required?: boolean;
};
export const UIAccountSettingsInput = ({
	label,
	isUsername,
	name,
	value,
	onChange,
	minLength,
	required,
}: UIAccountSettingsInputProps) => {
	return (
		<div className='flex flex-col'>
			<label className='text-sm text-gray-500'>{label}</label>
			{isUsername ? (
				<div className='border-1 border-gray-600 rounded-md px-2 py-0.5 focus-within:outline-1'>
					<span className='text-gray-500 mr-0.5'>@</span>
					<input
						className='text-xl font-bold outline-0'
						name={name}
						value={value}
						onChange={onChange}
						minLength={minLength}
						required={required}
					/>
				</div>
			) : (
				<input
					className='text-xl font-bold border-1 border-gray-600 rounded-md py-0.5 px-2'
					name={name}
					value={value}
					onChange={onChange}
					minLength={minLength}
					required={required}
				/>
			)}
		</div>
	);
};
