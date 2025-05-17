import clsx from 'clsx';
import { ChangeEventHandler } from 'react';

type UIAccountSettingsInputProps = {
	label?: string;
	isUsername?: boolean;
	name?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	minLength?: number;
	required?: boolean;
	errorMessage?: string;
	isInvalid?: boolean;
	isLoading?: boolean;
};
export const UIAccountSettingsInput = ({
	label,
	isUsername,
	name,
	value,
	onChange,
	minLength,
	required,
	isInvalid,
	isLoading,
}: UIAccountSettingsInputProps) => {
	return (
		<div className='flex flex-col'>
			<label className='text-sm text-gray-500'>{label}</label>
			{isUsername ? (
				<div
					className={clsx(
						'border-1 border-gray-600 rounded-md px-2 py-0.5 focus-within:outline-1',
						isLoading && 'cursor-progress',
						isInvalid && 'shadow-orange-800 ring-2 ring-orange-800 shadow-md'
					)}
				>
					<span className='text-gray-500 mr-0.5'>@</span>
					<input
						name={name}
						value={value}
						onChange={onChange}
						minLength={minLength}
						required={required}
						className='text-xl font-bold outline-0'
					/>
				</div>
			) : (
				<input
					className={clsx(
						'text-xl font-bold border-1 border-gray-600 rounded-md py-0.5 px-2',
						isLoading && 'cursor-progress',
						isInvalid && 'shadow-orange-800 ring-2 ring-orange-800 shadow-md'
					)}
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
