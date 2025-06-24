import { FaUsers } from 'react-icons/fa';
import { UIAdminPanelMenuItem } from './UI/UIAdminPanelMenuItem';
import { AiFillProduct } from 'react-icons/ai';
import { LuMessagesSquare } from 'react-icons/lu';
import { LiaLuggageCartSolid } from 'react-icons/lia';
import { GrContactInfo } from 'react-icons/gr';

export const AdminPanelMenuItem = {
	Statistics: () => (
		<UIAdminPanelMenuItem to='/admin-panel/statistics'>
			<GrContactInfo />
			Statistics
		</UIAdminPanelMenuItem>
	),
	Users: () => (
		<UIAdminPanelMenuItem to='/admin-panel/users'>
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
};
