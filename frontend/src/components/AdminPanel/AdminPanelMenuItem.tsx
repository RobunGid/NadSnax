import { FaUsers } from 'react-icons/fa';
import { UIAdminPanelMenuItem } from './UI/UIAdminPanelMenuItem';
import { AiFillProduct } from 'react-icons/ai';
import { LuMessagesSquare } from 'react-icons/lu';
import { LiaLuggageCartSolid } from 'react-icons/lia';
import { GrContactInfo } from 'react-icons/gr';

export const AdminPanelMenuItem = {
	Users: () => (
		<UIAdminPanelMenuItem to='/admin-panel/users' isFirst>
			<FaUsers />
			Users
		</UIAdminPanelMenuItem>
	),
	Items: () => (
		<UIAdminPanelMenuItem to='/admin-panel/items'>
			<AiFillProduct />
			Items
		</UIAdminPanelMenuItem>
	),
	Reviews: () => (
		<UIAdminPanelMenuItem to='/admin-panel/reviews'>
			<LuMessagesSquare />
			Reviews
		</UIAdminPanelMenuItem>
	),
	Orders: () => (
		<UIAdminPanelMenuItem to='/admin-panel/orders'>
			<LiaLuggageCartSolid />
			Orders
		</UIAdminPanelMenuItem>
	),
	Statistics: () => (
		<UIAdminPanelMenuItem to='/admin-panel/statistics' isLast>
			<GrContactInfo />
			Statistics
		</UIAdminPanelMenuItem>
	),
};
