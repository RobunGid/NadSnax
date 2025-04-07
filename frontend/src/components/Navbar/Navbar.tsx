import { useContext, useState } from 'react';
import { NavbarLink } from './NavbarLink';
import { NavbarRule } from './NavbarRule';
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarDropdownButton } from './NavbarDropdownButton';
import { SiteLogo } from './SiteLogo';
import { NavbarCart } from './NavbarCart';
import { Cart } from '../Cart/Cart';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { ItemCategory } from '../../types';
import { NavbarContext } from '../../context/NavbarContext';
import { UIModal } from '../UI/UIModal';
import { UINavbarOpenSidebarButton } from './UI/UINavbarOpenSidebarButton';

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
				<NavbarLink to='/home'>
					<SiteLogo />
				</NavbarLink>

				<ul className='flex-row items-center hidden md:flex md:gap-3 flex-grow dark:text-gray-200'>
					<li>
						<NavbarLink to='/home' text='Home' />
					</li>
					<NavbarRule />
					<li>
						<NavbarLink to='/products/best-sellers' text='Best Sellers' />
					</li>
					<NavbarRule />
					<li>
						<NavbarLink to='/products/secretboxes' text='Secret Boxes' />
					</li>
					<NavbarRule />

					{categories.map((category) => (
						<li key={category.id} className='z-10'>
							<NavbarDropdownButton
								to={category.pageLink}
								text={category.name}
							/>
							<NavbarDropdown category={category} />
						</li>
					))}
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
