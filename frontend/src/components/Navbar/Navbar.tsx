import { useContext } from 'react';
import { NavbarCart } from './NavbarCart';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { ItemCategory } from '../../types';
import { NavbarContext } from '../../context/NavbarContext';
import { UINavbarOpenSidebarButton } from './UI/UINavbarOpenSidebarButton';
import { NavbarCategories } from './NavbarCategories';
import { UINavbarSiteLogo } from './UI/UINavbarSiteLogo';
import { NavbarItem } from './NavbarItem';
import { UINavbarNavigation } from './UI/UINavbarNavigation';
import { ModalContext } from '../../context/ModalContext';
import { UINavbar } from './UI/UINavbar';

interface NavbarProps {
	categories: ItemCategory[];
}

export const Navbar = ({ categories }: NavbarProps) => {
	const { toggleSidebarVisibility } = useContext(NavbarContext);
	const { toggleModalVisibility } = useContext(ModalContext);

	return (
		<UINavbar>
			<UINavbarOpenSidebarButton onClick={toggleSidebarVisibility} />

			<UINavbarSiteLogo />

			<UINavbarNavigation>
				<NavbarItem.Home />
				<NavbarItem.BestSellers />
				<NavbarItem.SecretBoxes />

				<NavbarCategories categories={categories} />
			</UINavbarNavigation>

			<NavbarCart onClick={() => toggleModalVisibility()} />

			<ProfileMenu />
		</UINavbar>
	);
};
