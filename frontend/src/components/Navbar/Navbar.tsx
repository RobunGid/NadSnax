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
import { CartModalContext } from '../../context/CartModalContext';
import { UINavbar } from './UI/UINavbar';
import { useStateSelector } from '../../store';
import { ThemeSwitcher } from '../Layout/ThemeSwitcher';
import { NavbarLoginButton } from './NavbarLoginButton';

interface NavbarProps {
	categories: ItemCategory[];
}

export const Navbar = ({ categories }: NavbarProps) => {
	const { toggleSidebarVisibility } = useContext(NavbarContext);
	const { toggleCartModalVisibility } = useContext(CartModalContext);

	const authStatus = useStateSelector((state) => state.auth.status);

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

			<NavbarCart onClick={() => toggleCartModalVisibility()} />

			{authStatus === 'success' ? (
				<ProfileMenu />
			) : (
				<>
					<ThemeSwitcher />
					<NavbarLoginButton />
				</>
			)}
		</UINavbar>
	);
};
