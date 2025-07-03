import { IoSettingsOutline } from 'react-icons/io5';
import { BiHelpCircle, BiHistory, BiInfoCircle, BiStar, BiUser } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { UIAccountMenuItem } from './UI/UIAccountMenuItem';
import { PiSignOut, PiStar } from 'react-icons/pi';
import { MouseEventHandler } from 'react';
import { useTranslate } from '../../i18n/i18n';
import { withTranslate } from '../../logic/withTranslate';

interface SignoutProps {
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	translate: ReturnType<typeof useTranslate>;
}

interface AccountMenuItemProps {
	translate: ReturnType<typeof useTranslate>;
}

export const AccountMenuItem = {
	Profile: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/profile'>
			<BiUser />
			{translate('account_menu.profile')}
		</UIAccountMenuItem>
	)),
	OrderHistory: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/order_history'>
			<BiHistory />
			{translate('account_menu.order_history')}
		</UIAccountMenuItem>
	)),
	Reviews: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/reviews'>
			<BiStar />
			{translate('account_menu.reviews')}
		</UIAccountMenuItem>
	)),
	RecentlyViewed: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/recently_viewed'>
			<FaMagnifyingGlass />
			{translate('account_menu.recently_viewed')}
		</UIAccountMenuItem>
	)),
	Favorites: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/favorites'>
			<PiStar />
			{translate('account_menu.favorites')}
		</UIAccountMenuItem>
	)),
	Help: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/help'>
			<BiHelpCircle />
			{translate('account_menu.help')}
		</UIAccountMenuItem>
	)),
	Statistics: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/statistics'>
			<BiInfoCircle />
			{translate('account_menu.statistics')}
		</UIAccountMenuItem>
	)),
	Settings: withTranslate(({ translate }: AccountMenuItemProps) => (
		<UIAccountMenuItem to='/account/settings'>
			<IoSettingsOutline />
			{translate('account_menu.settings')}
		</UIAccountMenuItem>
	)),
	Signout: withTranslate(({ onClick, translate }: SignoutProps) => (
		<UIAccountMenuItem to='/account/signout' onClick={onClick}>
			<PiSignOut />
			{translate('account_menu.signout')}
		</UIAccountMenuItem>
	)),
};
