import { FC, useState } from 'react';
import { NavbarLink } from '../Navbar/NavbarLink';
import { NavbarRule } from '../Navbar/NavbarRule';
import { NavbarDropdown } from '../Navbar/NavbarDropdown';
import { NavbarDropdownButton } from '../Navbar/NavbarDropdownButton';
import { SiteLogo } from '../Navbar/SiteLogo';
import { Sidebar } from '../Sidebar/Sidebar';
import NavbarCart from '../Cart/NavbarCart';
import Modal from './Modal';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../store/categorySelectors';

export const Navbar: FC = () => {
	const [isModalActive, setIsModalActive] = useState<boolean>(false);

	const categories = useSelector(selectAllCategories);

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
					className='ml-auto hover:scale-110 m-1 transition'
					onClick={() => setIsModalActive(true)}
				/>
			</div>

			<Modal active={isModalActive} setActive={setIsModalActive}>
				<Cart setActive={setIsModalActive} />
			</Modal>
		</>
	);
};
