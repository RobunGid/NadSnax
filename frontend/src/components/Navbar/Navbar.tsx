import { useContext, useState } from 'react';
import { NavbarCart } from './NavbarCart';
import { Cart } from '../Cart/Cart';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { ItemCategory } from '../../types';
import { NavbarContext } from '../../context/NavbarContext';
import { UIModal } from '../UI/UIModal';
import { UINavbarOpenSidebarButton } from './UI/UINavbarOpenSidebarButton';
import { NavbarCategories } from './NavbarCategories';
import { UINavbarSiteLogo } from './UI/UINavbarSiteLogo';
import { NavbarItem } from './NavbarItem';

interface NavbarProps {
	categories: ItemCategory[];
}

export const Navbar = ({ categories }: NavbarProps) => {
	const { toggleSidebarVisibility } = useContext(NavbarContext);

	const [isModalActive, setIsModalActive] = useState<boolean>(false);

	return (
		<>
			<div className='w-full border-b-[1px] flex flex-row items-center dark:bg-gray-800 dark:border-gray-700'>
				<UINavbarOpenSidebarButton onClick={toggleSidebarVisibility} />

				<UINavbarSiteLogo />

				<ul className='flex-row hidden md:flex md:gap-3 flex-grow dark:text-gray-200 divide-x-[1px] divide-gray-500'>
					<NavbarItem.Home />
					<NavbarItem.BestSellers />
					<NavbarItem.SecretBoxes />

					<NavbarCategories categories={categories} />
				</ul>

				<NavbarCart
					className='ml-auto hover:scale-110 mt-1 transition-transform'
					onClick={() => setIsModalActive(true)}
				/>

				<ProfileMenu className='m-2' />
			</div>

			<UIModal active={isModalActive} setActive={setIsModalActive}>
				<Cart setActive={setIsModalActive} />
			</UIModal>
		</>
	);
};
