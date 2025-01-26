import { FC } from 'react';
import { NavBarLink } from '../NavBar/NavBarLink';
import { NavBarRule } from '../NavBar/NavBarRule';
import { SnacksDropdown } from '../NavBar/SnacksDropdown';
import { SnacksButton } from '../NavBar/SnacksButton';
import { SiteLogo } from '../NavBar/SiteLogo';
import { SideBar } from '../SideBar/SideBar';

export const NavBar: FC = () => {
	return (
		<div className='w-full border-b-[1px] flex flex-row items-center'>
			<SideBar />
			<NavBarLink to='/about'>
				<SiteLogo />
			</NavBarLink>

			<ul className='flex-row items-end hidden md:flex md:gap-3'>
				<li>
					<NavBarLink to='/about' text='About' />
				</li>
				<NavBarRule />
				<li>
					<NavBarLink to='/best-sellers' text='Best Sellers' />
				</li>
				<NavBarRule />
				<li>
					<NavBarLink to='/secret-boxes' text='Secret Boxes' />
				</li>
				<NavBarRule />

				<li>
					<SnacksButton />
					<SnacksDropdown />
				</li>
			</ul>
		</div>
	);
};
