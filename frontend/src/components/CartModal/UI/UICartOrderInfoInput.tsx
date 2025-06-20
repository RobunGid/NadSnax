import { ChangeEventHandler } from 'react';

interface UICartOrderInfoInputProps {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const UICartOrderInfoInput = ({ value, onChange }: UICartOrderInfoInputProps) => {
	return (
		<div className='flex flex-row w-40 gap-1 items-center'>
			<input value={value} onChange={onChange} className='w-30' />
		</div>
	);
};
