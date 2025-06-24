import { JSX } from 'react';
export type Option = {
	value: string;
	text: string;
} & JSX.IntrinsicElements['option'];

interface OrderInfo {
	options: Option[];
}

export const orderInfoConfig: OrderInfo = {
	options: [
		{ text: '--- Pickup point ---', value: '', disabled: true },
		{ text: 'New York', value: 'NY' },
		{ text: 'Manhetten', value: 'MA' },
	],
};
