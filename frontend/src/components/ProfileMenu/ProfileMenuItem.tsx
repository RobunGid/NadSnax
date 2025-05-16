import { MouseEventHandler } from 'react';
import { UIProfileMenuItem } from './UI/UIProfileMenuItem';

interface SignOutProps {
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const ProfileMenuItem = {
	Profile: () => (
		<UIProfileMenuItem to='/account/profile'>My Profile</UIProfileMenuItem>
	),
	Favorites: () => (
		<UIProfileMenuItem to='/account/favorites'>Favorites</UIProfileMenuItem>
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
	SignOut: ({ onClick }: SignOutProps) => (
		<UIProfileMenuItem to='/account/signout' type='secondary' onClick={onClick}>
			Sign out
		</UIProfileMenuItem>
	),
};
