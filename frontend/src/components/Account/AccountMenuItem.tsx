import { IoSettingsOutline } from 'react-icons/io5';
import { BiHelpCircle, BiHistory, BiInfoCircle, BiStar, BiUser } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { UIAccountMenuItem } from './UI/UIAccountMenuItem';
import { PiSignOut, PiStar } from 'react-icons/pi';

export const AccountMenuItem = {
	Profile: () => (
		<UIAccountMenuItem to='/account/profile'>
			<BiUser />
			Profile
		</UIAccountMenuItem>
	),
	OrderHistory: () => (
		<UIAccountMenuItem to='/account/order_history'>
			<BiHistory />
			Order History
		</UIAccountMenuItem>
	),
	Reviews: () => (
		<UIAccountMenuItem to='/account/reviews'>
			<BiStar />
			Reviews
		</UIAccountMenuItem>
	),

	RecentlyViewed: () => (
		<UIAccountMenuItem to='/account/recently_viewed'>
			<FaMagnifyingGlass />
			Recently viewed
		</UIAccountMenuItem>
	),
	Favourites: () => (
		<UIAccountMenuItem to='/account/favourites'>
			<PiStar />
			Favourites
		</UIAccountMenuItem>
	),
	Help: () => (
		<UIAccountMenuItem to='/account/help'>
			<BiHelpCircle />
			Help
		</UIAccountMenuItem>
	),
	Statistics: () => (
		<UIAccountMenuItem to='/account/statistics'>
			<BiInfoCircle />
			Statistics
		</UIAccountMenuItem>
	),
	Settings: () => (
		<UIAccountMenuItem to='/account/settings'>
			<IoSettingsOutline />
			Settings
		</UIAccountMenuItem>
	),
	Signout: () => (
		<UIAccountMenuItem to='/account/signout' isLast>
			<PiSignOut />
			Signout
		</UIAccountMenuItem>
	),
};
