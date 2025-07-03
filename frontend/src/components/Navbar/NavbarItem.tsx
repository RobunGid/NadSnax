import { useTranslate } from '../../i18n/i18n';
import { withTranslate } from '../../logic/withTranslate';
import { UINavbarItem } from './UI/UINavbarItem';
import { UINavbarItemContainer } from './UI/UINavbarItemContainer';

interface NavbarItemProps {
	translate: ReturnType<typeof useTranslate>;
}

export const NavbarItem = {
	Home: withTranslate(({ translate }: NavbarItemProps) => {
		return (
			<UINavbarItemContainer>
				<UINavbarItem to='/home' text={translate('navbar.home')} />
			</UINavbarItemContainer>
		);
	}),
	BestSellers: withTranslate(({ translate }: NavbarItemProps) => {
		return (
			<UINavbarItemContainer>
				<UINavbarItem
					to='/products/best-sellers'
					text={translate('navbar.bestsellers')}
				/>
			</UINavbarItemContainer>
		);
	}),
	SecretBoxes: withTranslate(({ translate }: NavbarItemProps) => {
		return (
			<UINavbarItemContainer>
				<UINavbarItem
					to='/products/secretboxes'
					text={translate('navbar.secretboxes')}
				/>
			</UINavbarItemContainer>
		);
	}),
	AllProducts: withTranslate(({ translate }: NavbarItemProps) => {
		return (
			<UINavbarItemContainer>
				<UINavbarItem
					to='/products'
					text={translate('navbar.all_products')}
					precise
				/>
			</UINavbarItemContainer>
		);
	}),
};
