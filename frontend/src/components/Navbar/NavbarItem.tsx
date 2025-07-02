import { useTranslate } from '../../i18n/i18n';
import { UINavbarItem } from './UI/UINavbarItem';

export const NavbarItem = {
	Home: () => {
		const translate = useTranslate();
		return (
			<li>
				<UINavbarItem to='/home' text={translate('navbar.home')} />
			</li>
		);
	},
	BestSellers: () => {
		const translate = useTranslate();
		return (
			<li>
				<UINavbarItem
					to='/products/best-sellers'
					text={translate('navbar.bestsellers')}
				/>
			</li>
		);
	},
	SecretBoxes: () => {
		const translate = useTranslate();
		return (
			<li>
				<UINavbarItem
					to='/products/secretboxes'
					text={translate('navbar.secretboxes')}
				/>
			</li>
		);
	},
	AllProducts: () => {
		const translate = useTranslate();
		return (
			<li>
				<UINavbarItem
					to='/products'
					text={translate('navbar.all_products')}
					precise
				/>
			</li>
		);
	},
};
