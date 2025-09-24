import { MouseEventHandler } from 'react';
import { UIProfileMenuItem } from './UI/UIProfileMenuItem';
import { GrUserAdmin } from 'react-icons/gr';
import { withTranslate } from '../../logic/withTranslate';
import { useTranslate } from '../../i18n/i18n';

interface SignOutProps {
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	translate: ReturnType<typeof useTranslate>;
}

interface ProfileMenuItemProps {
	translate: ReturnType<typeof useTranslate>;
}

export const ProfileMenuItem = {
	Profile: withTranslate(({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/profile'>
			{translate('profile_menu.profile')}
		</UIProfileMenuItem>
	)),
	Favorites: withTranslate(({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/favorites'>
			{translate('profile_menu.favorites')}
		</UIProfileMenuItem>
	)),
	OrderHistory: withTranslate(({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/order-history'>
			{translate('profile_menu.order_history')}
		</UIProfileMenuItem>
	)),
	Settings: withTranslate(({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/settings'>
			{translate('profile_menu.settings')}
		</UIProfileMenuItem>
	)),
	Reviews: withTranslate(({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/account/reviews'>
			{translate('profile_menu.reviews')}
		</UIProfileMenuItem>
	)),
	SignOut: withTranslate(({ onClick, translate }: SignOutProps) => (
		<UIProfileMenuItem to='/account/signout' type='secondary' onClick={onClick}>
			{translate('profile_menu.sign_out')}
		</UIProfileMenuItem>
	)),
	ControlPanel: withTranslate(({ translate }: ProfileMenuItemProps) => (
		<UIProfileMenuItem to='/control-panel/statistics' type='control'>
			<GrUserAdmin size='36' />
			{translate('profile_menu.control_panel')}
		</UIProfileMenuItem>
	)),
};
