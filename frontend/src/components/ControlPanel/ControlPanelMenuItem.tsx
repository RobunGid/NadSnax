import { FaUsers } from 'react-icons/fa';
import { UIControlPanelMenuItem } from './UI/UIControlPanelMenuItem';
import { AiFillProduct } from 'react-icons/ai';
import { LuMessagesSquare } from 'react-icons/lu';
import { LiaLuggageCartSolid } from 'react-icons/lia';
import { GrContactInfo } from 'react-icons/gr';
import { IoCreateOutline } from 'react-icons/io5';

export const ControlPanelMenuItem = {
	Statistics: () => (
		<UIControlPanelMenuItem to='/control-panel/statistics'>
			<GrContactInfo />
			Statistics
		</UIControlPanelMenuItem>
	),
	Users: () => (
		<UIControlPanelMenuItem to='/control-panel/users'>
			<FaUsers />
			Users
		</UIControlPanelMenuItem>
	),
	Items: () => (
		<UIControlPanelMenuItem to='/control-panel/items'>
			<AiFillProduct />
			Items
		</UIControlPanelMenuItem>
	),
	Reviews: () => (
		<UIControlPanelMenuItem to='/control-panel/reviews'>
			<LuMessagesSquare />
			Reviews
		</UIControlPanelMenuItem>
	),
	Orders: () => (
		<UIControlPanelMenuItem to='/control-panel/orders'>
			<LiaLuggageCartSolid />
			Orders
		</UIControlPanelMenuItem>
	),
	CreateItem: () => (
		<UIControlPanelMenuItem to='/control-panel/create-item'>
			<IoCreateOutline />
			Create item
		</UIControlPanelMenuItem>
	),
};
