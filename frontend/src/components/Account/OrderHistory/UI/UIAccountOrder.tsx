import { AiOutlineUser } from 'react-icons/ai';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { MdLocationOn, MdOutlineCalendarToday } from 'react-icons/md';
import { AccountOrderItem } from '../AccountOrderItem';
import { Order } from '../../../../types';
import { useTranslate } from '../../../../i18n/i18n';
import { withTranslate } from '../../../../logic/withTranslate';

interface UIAccountOrderProps {
	totalPrice: string;
	totalCount: string;
	order: Order;
	createdAt: string;
	orderStatus: string;
	translate: ReturnType<typeof useTranslate>;
}

export const UIAccountOrder = withTranslate(
	({
		totalPrice,
		totalCount,
		order,
		createdAt,
		orderStatus,
		translate,
	}: UIAccountOrderProps) => {
		return (
			<div className='flex flex-col bg-gray-700 rounded-xl m-4 w-90 p-6 max-h-96 shadow-xl relative'>
				<div className='grid grid-cols-[2fr_1fr]'>
					<div>
						<div className='text-xl font-semibold'>
							{translate('account.order.title')}
						</div>
						<div className='flex items-center gap-2'>
							<div className='text-xl font-semibold'>{totalPrice}</div>
							<div className='text-sm text-gray-400'>
								{totalCount}{' '}
								{translate('account.order.item_count', {
									count: totalCount,
								})}
							</div>
						</div>
						<div className='flex text-sm py-2 gap-1 flex-col'>
							<div className='flex gap-1'>
								<MdLocationOn size='16' />
								{order.pickupPoint}
							</div>
							<div className='flex gap-1'>
								<AiOutlineUser size='16' />
								{order.user.firstName} {order.user.lastName}
							</div>
							<div className='flex gap-1'>
								<MdOutlineCalendarToday size='16' />
								{createdAt}
							</div>
						</div>
					</div>
					<div className='bg-teal-600/30 w-32 h-10 flex items-center justify-center rounded-2xl shadow-xl'>
						{translate(orderStatus)}
						<FaRegQuestionCircle size='14' className='cursor-help ms-1' />
					</div>
				</div>

				<div className='overflow-y-auto'>
					{order.items.map((orderItem) => (
						<AccountOrderItem orderItem={orderItem} key={orderItem.id} />
					))}
				</div>
			</div>
		);
	}
);
