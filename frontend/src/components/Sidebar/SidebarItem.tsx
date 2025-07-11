import { GoHome } from 'react-icons/go';
import { SidebarItemContainer } from './SidebarItemContainer';
import { CiGift } from 'react-icons/ci';
import { MdStarOutline } from 'react-icons/md';
import { FaBoxes } from 'react-icons/fa';
import { useTranslate } from '../../i18n/i18n';
import { withTranslate } from '../../logic/withTranslate';

interface SidebarItemProps {
	translate: ReturnType<typeof useTranslate>;
}

export const SidebarItem = {
	Home: withTranslate(({ translate }: SidebarItemProps) => (
		<SidebarItemContainer to='/home'>
			<GoHome />
			<span className='ms-3'>{translate('sidebar.item.home')}</span>
		</SidebarItemContainer>
	)),
	AllProducts: withTranslate(({ translate }: SidebarItemProps) => (
		<SidebarItemContainer to='/products'>
			<FaBoxes />
			<span className='ms-3'>{translate('sidebar.item.all_products')}</span>
		</SidebarItemContainer>
	)),
	SecretBoxes: withTranslate(({ translate }: SidebarItemProps) => (
		<SidebarItemContainer to='/products/secretboxes'>
			<CiGift />
			<span className='ms-3'>{translate('sidebar.item.secretboxes')}</span>
		</SidebarItemContainer>
	)),
	BestSellers: withTranslate(({ translate }: SidebarItemProps) => (
		<SidebarItemContainer to='/products/best-sellers'>
			<MdStarOutline />
			<span className='ms-3'>{translate('sidebar.item.best_sellers')}</span>
		</SidebarItemContainer>
	)),
};
