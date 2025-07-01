import { useTranslate } from '../../i18n/i18n';
import { UINavbarItem } from './UI/UINavbarItem';

export const NavbarItem = {
	Home: () => {
		const translate = useTranslate();
		return (
			<li>
				<UINavbarItem
					to='/home'
					text={translate('navbar.home')}
					className='pl-3'
				/>
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
					className='pl-3'
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
					className='pl-3'
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
					className='pl-3'
					precise
				/>
			</li>
		);
	},
};
