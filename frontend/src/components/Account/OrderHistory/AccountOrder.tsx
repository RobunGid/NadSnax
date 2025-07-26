import { useI18n, useTranslate } from '../../../i18n/i18n';
import { formatDate } from '../../../logic/formatDate';
import { formatPrice } from '../../../logic/formatPrice';
import { Order } from '../../../types';
import { UIAccountOrder } from './UI/UIAccountOrder';

interface AccountOrderProps {
	order: Order;
}

export const AccountOrder = ({ order }: AccountOrderProps) => {
	const totalPrice = order.items.reduce(
		(prev, cur) => prev + cur.item.price * cur.quantity,
		0
	);

	const { lang } = useI18n();
	const translate = useTranslate();

	const totalCount = order.items
		.reduce((prev, cur) => prev + cur.quantity, 0)
		.toString();
	const formattedTotalPrice = formatPrice(totalPrice, lang);
	const formatedCreatedAt = formatDate(order.createdAt, lang);
	const formattedOrderStatus = translate(order.status);

	return (
		<UIAccountOrder
			totalCount={totalCount}
			totalPrice={formattedTotalPrice}
			createdAt={formatedCreatedAt}
			orderStatus={formattedOrderStatus}
			order={order}
		/>
	);
};
