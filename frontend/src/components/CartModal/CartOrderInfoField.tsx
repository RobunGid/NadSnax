import { ChangeEventHandler } from 'react';
import { UICartOrderInfoField } from './UI/UICartOrderInfoField';
import { UICartOrderInfoInput } from './UI/UICartOrderInfoInput';

interface CartOrderInfoFieldProps {
	FullName: {
		fullName: string;
	};
	TotalAmount: {
		totalAmount: string;
	};
	ItemQuantity: {
		itemQuantity: string;
	};
	PickupPoint: {
		value: string;
		onChange: ChangeEventHandler<HTMLInputElement>;
	};
}

export const CartOrderInfoField = {
	FullName: ({ fullName }: CartOrderInfoFieldProps['FullName']) => (
		<>
			<UICartOrderInfoField type='start'>Full name: </UICartOrderInfoField>
			<UICartOrderInfoField type='end'>{fullName}</UICartOrderInfoField>
		</>
	),
	TotalAmount: ({ totalAmount }: CartOrderInfoFieldProps['TotalAmount']) => (
		<>
			<UICartOrderInfoField type='start'>Total Amount: </UICartOrderInfoField>{' '}
			<UICartOrderInfoField type='end'>{totalAmount}</UICartOrderInfoField>
		</>
	),
	ItemQuantity: ({ itemQuantity }: CartOrderInfoFieldProps['ItemQuantity']) => (
		<>
			<UICartOrderInfoField type='start'>Item quantity: </UICartOrderInfoField>
			<UICartOrderInfoField type='end'>{itemQuantity}</UICartOrderInfoField>
		</>
	),
	PickupPoint: ({ value, onChange }: CartOrderInfoFieldProps['PickupPoint']) => (
		<UICartOrderInfoField>
			<UICartOrderInfoInput value={value} onChange={onChange} />
		</UICartOrderInfoField>
	),
};
