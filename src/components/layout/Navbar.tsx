import { FC } from 'react';
import { NavbarLink } from '../Navbar/NavbarLink';
import { NavbarRule } from '../Navbar/NavbarRule';
import { NavbarDropdown } from '../Navbar/NavbarDropdown';
import { NavbarDropdownButton } from '../Navbar/NavbarDropdownButton';
import { SiteLogo } from '../Navbar/SiteLogo';
import { Sidebar } from '../Sidebar/Sidebar';
import { categories } from '../../mock';

export const Navbar: FC = () => {
	return (
		<div className='w-full border-b-[1px] flex flex-row items-center'>
			<Sidebar />
			<NavbarLink to='/about'>
				<SiteLogo />
			</NavbarLink>

			<ul className='flex-row items-end hidden md:flex md:gap-3'>
				<li>
					<NavbarLink to='/about' text='About' />
				</li>
				<NavbarRule />
				<li>
					<NavbarLink to='/best-sellers' text='Best Sellers' />
				</li>
				<NavbarRule />
				<li>
					<NavbarLink to='/secret-boxes' text='Secret Boxes' />
				</li>
				<NavbarRule />

				{Object.entries(categories).map(([name, category]) => (
					<li key={name}>
						<NavbarDropdownButton text={name} />
						<NavbarDropdown category={category} />
					</li>
				))}
			</ul>
		</div>
	);
};
