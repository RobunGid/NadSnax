import { FC, useState } from 'react';
import { NavbarLink } from '../Navbar/NavbarLink';
import { NavbarRule } from '../Navbar/NavbarRule';
import { NavbarDropdown } from '../Navbar/NavbarDropdown';
import { NavbarDropdownButton } from '../Navbar/NavbarDropdownButton';
import { SiteLogo } from '../Navbar/SiteLogo';
import { Sidebar } from '../Sidebar/Sidebar';
import { categories } from '../../mock';
import NavbarCart from '../Cart/NavbarCart';
import Modal from './Modal';
import Cart from '../Cart/Cart';

export const Navbar: FC = () => {
	const [isModalActive, setIsModalActive] = useState<boolean>(true);
	return (
		<>
			<div className='w-full border-b-[1px] flex flex-row items-center'>
				<Sidebar />
				<NavbarLink to='/home'>
					<SiteLogo />
				</NavbarLink>

				<ul className='flex-row items-center hidden md:flex md:gap-3 flex-grow'>
					<li>
						<NavbarLink to='/home' text='Home' />
					</li>
					<NavbarRule />
					<li>
						<NavbarLink to='/products/best-sellers' text='Best Sellers' />
					</li>
					<NavbarRule />
					<li>
						<NavbarLink to='/products/secret-boxes' text='Secret Boxes' />
					</li>
					<NavbarRule />

					{Object.entries(categories).map(([name, category]) => (
						<li key={name} className='z-10'>
							<NavbarDropdownButton to={category.to} text={name} />
							<NavbarDropdown category={category} />
						</li>
					))}
				</ul>
				<NavbarCart
					className='ml-auto hover:scale-110 m-1 transition'
					onClick={() => setIsModalActive(true)}
				/>
			</div>

			<Modal active={isModalActive} setActive={setIsModalActive}>
				<Cart />
			</Modal>
		</>
	);
};
