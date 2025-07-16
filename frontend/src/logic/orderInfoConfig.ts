import { Option } from '../types';

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
