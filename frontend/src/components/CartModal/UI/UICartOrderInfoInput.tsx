import { ChangeEventHandler } from 'react';
import { UIInput } from '../../UI/UIInput';

interface UICartOrderInfoInputProps {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const UICartOrderInfoInput = ({ value, onChange }: UICartOrderInfoInputProps) => {
	return <UIInput value={value} onChange={onChange} />;
};
