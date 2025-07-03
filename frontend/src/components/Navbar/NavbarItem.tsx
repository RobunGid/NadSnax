import { useTranslate } from '../../i18n/i18n';
import { UINavbarItem } from './UI/UINavbarItem';
import { UINavbarItemContainer } from './UI/UINavbarItemContainer';

export const NavbarItem = {
	Home: () => {
		const translate = useTranslate();
		return (
			<UINavbarItemContainer>
				<UINavbarItem to='/home' text={translate('navbar.home')} />
			</UINavbarItemContainer>
		);
	},
	BestSellers: () => {
		const translate = useTranslate();
		return (
			<UINavbarItemContainer>
				<UINavbarItem
					to='/products/best-sellers'
					text={translate('navbar.bestsellers')}
				/>
			</UINavbarItemContainer>
		);
	},
	SecretBoxes: () => {
		const translate = useTranslate();
		return (
			<UINavbarItemContainer>
				<UINavbarItem
					to='/products/secretboxes'
					text={translate('navbar.secretboxes')}
				/>
			</UINavbarItemContainer>
		);
	},
	AllProducts: () => {
		const translate = useTranslate();
		return (
			<UINavbarItemContainer>
				<UINavbarItem
					to='/products'
					text={translate('navbar.all_products')}
					precise
				/>
			</UINavbarItemContainer>
		);
	},
};
