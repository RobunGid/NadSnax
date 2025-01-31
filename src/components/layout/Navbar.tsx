import { FC } from 'react';
import { NavbarLink } from '../Navbar/NavbarLink';
import { NavbarRule } from '../Navbar/NavbarRule';
import { SnacksDropdown } from '../Navbar/SnacksDropdown';
import { SnacksButton } from '../Navbar/SnacksButton';
import { SiteLogo } from '../Navbar/SiteLogo';
import { Sidebar } from '../Sidebar/Sidebar';

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

				<li>
					<SnacksButton />
					<SnacksDropdown />
				</li>
			</ul>
		</div>
	);
};
