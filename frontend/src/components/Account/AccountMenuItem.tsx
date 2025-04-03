import { IoSettingsOutline } from 'react-icons/io5';
import { BiHelpCircle, BiHistory, BiInfoCircle, BiStar, BiUser } from 'react-icons/bi';
import { AccountMenuItemContainer } from './AccountMenuContainer';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const AccountMenuItem = {
	Settings: () => (
		<AccountMenuItemContainer to='/account/settings' isLast>
			<IoSettingsOutline />
			Settings
		</AccountMenuItemContainer>
	),
	Statistics: () => (
		<AccountMenuItemContainer to='/account/statistics'>
			<BiInfoCircle />
			Statistics
		</AccountMenuItemContainer>
	),
	Help: () => (
		<AccountMenuItemContainer to='/account/help'>
			<BiHelpCircle />
			Help
		</AccountMenuItemContainer>
	),
	RecentlyViewed: () => (
		<AccountMenuItemContainer to='/account/recently_viewed'>
			<FaMagnifyingGlass />
			Recently viewed
		</AccountMenuItemContainer>
	),
	OrderHistory: () => (
		<AccountMenuItemContainer to='/account/order_history'>
			<BiHistory />
			Order History
		</AccountMenuItemContainer>
	),
	Reviews: () => (
		<AccountMenuItemContainer to='/account/reviews'>
			<BiStar />
			Reviews
		</AccountMenuItemContainer>
	),
	Profile: () => (
		<AccountMenuItemContainer to='/account/profile'>
			<BiUser />
			Profile
		</AccountMenuItemContainer>
	),
};
