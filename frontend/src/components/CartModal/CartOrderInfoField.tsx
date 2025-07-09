import { ChangeEventHandler } from 'react';
import { UICartOrderInfoField } from './UI/UICartOrderInfoField';
import { MdEdit } from 'react-icons/md';
import { UISelect } from '../UI/UISelect';
import { orderInfoConfig } from '../../logic/orderInfoConfig';
import { useTranslate } from '../../i18n/i18n';
import { withTranslate } from '../../logic/withTranslate';

interface CartOrderInfoFieldProps {
	FullName: {
		fullName: string;
		translate: ReturnType<typeof useTranslate>;
	};

	TotalAmount: {
		totalAmount: string;
		translate: ReturnType<typeof useTranslate>;
	};

	ItemQuantity: {
		itemQuantity: string;
		translate: ReturnType<typeof useTranslate>;
	};

	PickupPoint: {
		value: string;
		onChange: ChangeEventHandler<HTMLSelectElement>;
		translate: ReturnType<typeof useTranslate>;
	};
}

export const CartOrderInfoField = {
	FullName: withTranslate(
		({ fullName, translate }: CartOrderInfoFieldProps['FullName']) => (
			<>
				<UICartOrderInfoField type='start'>
					{translate('cart.order_info.full_name')}
				</UICartOrderInfoField>
				<UICartOrderInfoField type='end'>{fullName}</UICartOrderInfoField>
			</>
		)
	),
	TotalAmount: withTranslate(
		({ totalAmount, translate }: CartOrderInfoFieldProps['TotalAmount']) => (
			<>
				<UICartOrderInfoField type='start'>
					{translate('cart.order_info.total_amount')}
				</UICartOrderInfoField>{' '}
				<UICartOrderInfoField type='end'>{totalAmount}</UICartOrderInfoField>
			</>
		)
	),
	ItemQuantity: withTranslate(
		({ itemQuantity, translate }: CartOrderInfoFieldProps['ItemQuantity']) => (
			<>
				<UICartOrderInfoField type='start'>
					{translate('cart.order_info.quantity')}
				</UICartOrderInfoField>
				<UICartOrderInfoField type='end'>{itemQuantity}</UICartOrderInfoField>
			</>
		)
	),
	PickupPoint: withTranslate(
		({ value, onChange, translate }: CartOrderInfoFieldProps['PickupPoint']) => (
			<>
				<UICartOrderInfoField type='start'>
					{translate('cart.order_info.pickup_point')}
					<MdEdit />
				</UICartOrderInfoField>

				<UISelect
					options={orderInfoConfig.options}
					value={value}
					onChange={onChange}
				/>
			</>
		)
	),
};
