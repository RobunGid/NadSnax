import { UIProfileMenuItem } from './UI/UIProfileMenuItem';

export const ProfileMenuItem = {
	Profile: () => (
		<UIProfileMenuItem to='/account/profile'>My Profile</UIProfileMenuItem>
	),
	Favourites: () => (
		<UIProfileMenuItem to='/account/favourites'>Favourites</UIProfileMenuItem>
	),
	OrderHistory: () => (
		<UIProfileMenuItem to='/account/order_history'>Order History</UIProfileMenuItem>
	),
	Settings: () => (
		<UIProfileMenuItem to='/account/settings'>Settings</UIProfileMenuItem>
	),
	Reviews: () => (
		<UIProfileMenuItem to='/account/reviews'>My reviews</UIProfileMenuItem>
	),
	SignOut: () => (
		<UIProfileMenuItem to='/account/signout' type='secondary'>
			Sign out
		</UIProfileMenuItem>
	),
};
