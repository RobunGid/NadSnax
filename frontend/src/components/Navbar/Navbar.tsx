import { useState } from 'react';
import { NavbarLink } from './NavbarLink';
import { NavbarRule } from './NavbarRule';
import { NavbarDropdown } from './NavbarDropdown';
import { NavbarDropdownButton } from './NavbarDropdownButton';
import { SiteLogo } from './SiteLogo';
import { Sidebar } from '../Sidebar/Sidebar';
import { NavbarCart } from './NavbarCart';
import { Modal } from '../layout/Modal';
import { Cart } from '../Cart/Cart';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { useStateSelector } from '../../store';

export const Navbar = () => {
	const [isModalActive, setIsModalActive] = useState<boolean>(false);

	const categories = useStateSelector((state) => state.category.categoryList);

	return (
		<>
			<div className='w-full border-b-[1px] flex flex-row items-center dark:bg-gray-800 dark:border-gray-700'>
				<Sidebar />
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
					className='ml-auto hover:scale-110 mt-1 transition'
					onClick={() => setIsModalActive(true)}
				/>
				<ProfileMenu className='m-2' />
			</div>

			<Modal active={isModalActive} setActive={setIsModalActive}>
				<Cart setActive={setIsModalActive} />
			</Modal>
		</>
	);
};
