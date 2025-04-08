import { SidebarItem } from './SidebarItem';
import { ItemCategory } from '../../types';
import { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
import { SidebarCategories } from './SidebarCategories';
import { UISidebarCloseMenuButton } from './UI/UISidebarCloseMenuButton';
import { UISidebar } from './UI/UISidebar';
import { UISidebarItems } from './UI/UISidebarItems';
import { UISidebarHeader } from './UI/UISidebarHeader';

interface SidebarProps {
	categories: ItemCategory[];
}

export const Sidebar = ({ categories }: SidebarProps) => {
	const { sidebarVisibility, toggleSidebarVisibility } = useContext(NavbarContext);
	return (
		<UISidebar className={sidebarVisibility ? 'translate-x-0' : '-translate-x-full'}>
			<UISidebarHeader onClick={toggleSidebarVisibility} />

			<UISidebarCloseMenuButton onClick={toggleSidebarVisibility} />
			<UISidebarItems>
				<SidebarItem.Home />
				<SidebarItem.BestSellers />
				<SidebarItem.SecretBoxes />

				<SidebarCategories categories={categories} />
			</UISidebarItems>
		</UISidebar>
	);
};
