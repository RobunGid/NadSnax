import { MouseEventHandler } from 'react';
import { UIProfileMenuItem } from './UI/UIProfileMenuItem';
import { GrUserAdmin } from 'react-icons/gr';

interface SignOutProps {
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	translate: (value: string) => string;
}

interface ProfileMenuItemProps {
	translate: (value: string) => string;
}

export const ProfileMenuItem = {
	Profile: ({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/profile'>
			{translate('profile_menu.profile')}
		</UIProfileMenuItem>
	),
	Favorites: ({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/favorites'>
			{translate('profile_menu.favorites')}
		</UIProfileMenuItem>
	),
	OrderHistory: ({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/order_history'>
			{translate('profile_menu.order_history')}
		</UIProfileMenuItem>
	),
	Settings: ({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/settings'>
			{translate('profile_menu.settings')}
		</UIProfileMenuItem>
	),
	Reviews: ({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/reviews'>
			{translate('profile_menu.reviews')}
		</UIProfileMenuItem>
	),
	SignOut: ({ onClick, translate }: SignOutProps) => (
		<UIProfileMenuItem to='/account/signout' type='secondary' onClick={onClick}>
			{translate('profile_menu.sign_out')}
		</UIProfileMenuItem>
	),
	AdminPanel: ({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/admin-panel/statistics' type='admin'>
			<GrUserAdmin size='36' />
			{translate('profile_menu.admin_panel')}
		</UIProfileMenuItem>
	),
};
