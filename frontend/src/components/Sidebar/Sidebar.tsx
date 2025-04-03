import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import { ItemCategory } from '../../types';
import { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
import { SidebarCategories } from './SidebarCategories';
import { SidebarCloseMenuButton } from './SidebarCloseMenuButton';
import { UISidebar } from '../UI/UISidebar';

interface SidebarProps {
	categories: ItemCategory[];
}

export const Sidebar = ({ categories }: SidebarProps) => {
	const { sidebarVisibility, toggleSidebarVisibility } = useContext(NavbarContext);
	return (
		<UISidebar className={sidebarVisibility ? 'translate-x-0' : '-translate-x-full'}>
			<SidebarHeader onClick={toggleSidebarVisibility} />

			<SidebarCloseMenuButton onClick={toggleSidebarVisibility} />
			<div className='py-4 overflow-y-auto pointer-events-auto'>
				<ul className='space-y-1 font-medium'>
					<SidebarItem.Home />
					<SidebarItem.BestSellers />
					<SidebarItem.SecretBoxes />

					<SidebarCategories categories={categories} />
				</ul>
			</div>
		</UISidebar>
	);
};
