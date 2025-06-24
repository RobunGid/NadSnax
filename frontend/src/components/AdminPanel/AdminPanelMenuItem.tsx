import { FaUsers } from 'react-icons/fa';
import { UIAdminPanelMenuItem } from './UI/UIAdminPanelMenuItem';
import { AiFillProduct } from 'react-icons/ai';
import { LuMessagesSquare } from 'react-icons/lu';
import { LiaLuggageCartSolid } from 'react-icons/lia';
import { GrContactInfo } from 'react-icons/gr';

export const AdminPanelMenuItem = {
	Users: () => (
		<UIAdminPanelMenuItem to='/admin-page/users' isFirst>
			<FaUsers />
			Users
		</UIAdminPanelMenuItem>
	),
	Items: () => (
		<UIAdminPanelMenuItem to='/admin-page/items'>
			<AiFillProduct />
			Items
		</UIAdminPanelMenuItem>
	),
	Reviews: () => (
		<UIAdminPanelMenuItem to='/admin-page/reviews'>
			<LuMessagesSquare />
			Reviews
		</UIAdminPanelMenuItem>
	),
	Orders: () => (
		<UIAdminPanelMenuItem to='/admin-page/orders'>
			<LiaLuggageCartSolid />
			Orders
		</UIAdminPanelMenuItem>
	),
	Statistics: () => (
		<UIAdminPanelMenuItem to='/admin-page/statistics' isLast>
			<GrContactInfo />
			Statistics
		</UIAdminPanelMenuItem>
	),
};
