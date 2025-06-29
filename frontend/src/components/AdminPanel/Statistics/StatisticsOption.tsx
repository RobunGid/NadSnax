import { AiFillProduct } from 'react-icons/ai';
import { UIAdminStatisticsOption } from './UI/UIAdminStatisticsOption';
import { IoReloadOutline } from 'react-icons/io5';
import { FaBoxArchive } from 'react-icons/fa6';
import { FaCheckCircle, FaTruck } from 'react-icons/fa';
import { MdCancel, MdDelete, MdSafetyCheck } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';

interface OrdersProps {
	count: number;
}

export const StatisticsOption = {
	TotalOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			type='big'
			icon={<AiFillProduct size='48' />}
			title='Total Orders'
		/>
	),
	ProcessingOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<IoReloadOutline />}
			title='Processing Orders'
		/>
	),
	PackingOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<FaBoxArchive />}
			title='Packing Orders'
		/>
	),
	ShippingOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<FaTruck />}
			title='Shipping Orders'
		/>
	),
	ReadyOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<MdSafetyCheck />}
			title='Ready Orders'
		/>
	),
	SuccessOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<FaCheckCircle />}
			title='Success Orders'
		/>
	),
	CanceledOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<MdCancel />}
			title='Canceled Orders'
		/>
	),
	ReturnedOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<TbTruckReturn />}
			title='Returned Orders'
		/>
	),
	DeletedOrders: ({ count }: OrdersProps) => (
		<UIAdminStatisticsOption
			count={count}
			icon={<MdDelete />}
			title='Deleted Orders'
		/>
	),
};
