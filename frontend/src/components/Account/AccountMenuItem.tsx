import { IoSettingsOutline } from 'react-icons/io5';
import { BiHelpCircle, BiHistory, BiInfoCircle, BiStar, BiUser } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { UIAccountMenuItem } from './UI/UIAccountMenuItem';
import { PiSignOut, PiStar } from 'react-icons/pi';
import { MouseEventHandler } from 'react';

interface SignoutProps {
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

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
	Favorites: () => (
		<UIAccountMenuItem to='/account/favorites'>
			<PiStar />
			Favorites
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
	Signout: ({ onClick }: SignoutProps) => (
		<UIAccountMenuItem to='/account/signout' isLast onClick={onClick}>
			<PiSignOut />
			Signout
		</UIAccountMenuItem>
	),
};
