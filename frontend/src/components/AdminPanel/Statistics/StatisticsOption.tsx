import { AiFillProduct } from 'react-icons/ai';
import { UIAdminStatisticsOption } from './UI/UIAdminStatisticsOption';
import { IoReloadOutline } from 'react-icons/io5';
import { FaBoxArchive, FaPersonCircleQuestion } from 'react-icons/fa6';
import { FaCheckCircle, FaTruck } from 'react-icons/fa';
import {
	MdCancel,
	MdDelete,
	MdOutlineWorkspacePremium,
	MdRateReview,
	MdSafetyCheck,
} from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import { LiaLuggageCartSolid } from 'react-icons/lia';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import { GiStarsStack } from 'react-icons/gi';

interface StatisticsOptionProps {
	Count: { count: number };
	Price: { price: string };
}

export const StatisticsOption = {
	Orders: {
		TotalOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				type='big'
				icon={<AiFillProduct size='48' />}
				title='Total Orders'
			/>
		),
		ProcessingOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<IoReloadOutline />}
				title='Processing Orders'
			/>
		),
		PackingOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<FaBoxArchive />}
				title='Packing Orders'
			/>
		),
		ShippingOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<FaTruck />}
				title='Shipping Orders'
			/>
		),
		ReadyOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<MdSafetyCheck />}
				title='Ready Orders'
			/>
		),
		SuccessOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<FaCheckCircle />}
				title='Success Orders'
			/>
		),
		CanceledOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<MdCancel />}
				title='Canceled Orders'
			/>
		),
		ReturnedOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<TbTruckReturn />}
				title='Returned Orders'
			/>
		),
		DeletedOrders: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<MdDelete />}
				title='Deleted Orders'
			/>
		),
	},
	Items: {
		TotalItems: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<LiaLuggageCartSolid size='48' />}
				title='Total Items'
				type='big'
			/>
		),
		BestsellerItems: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<MdOutlineWorkspacePremium />}
				title='Bestseller Items'
			/>
		),
		SecretboxItems: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<FaPersonCircleQuestion />}
				title='Secretbox Items'
			/>
		),
		AveragePrice: ({ price }: StatisticsOptionProps['Price']) => (
			<UIAdminStatisticsOption
				value={price}
				icon={<RiMoneyPoundCircleFill />}
				title='Average Price'
			/>
		),
	},
	Reviews: {
		TotalReviews: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<MdRateReview size='48' />}
				title='Total Reviews'
				type='big'
			/>
		),
		AverageRating: ({ count }: StatisticsOptionProps['Count']) => (
			<UIAdminStatisticsOption
				value={count}
				icon={<GiStarsStack />}
				title='Average Rating'
			/>
		),
	},
};
