import { FC } from 'react';
import { NavBarLink } from '../UI/NavBarLink';
import logo from '../../assets/logo.png';
import { NavBarRule } from '../UI/NavBarRule';
import { NavLink } from 'react-router';

export const NavBar: FC = () => {
	return (
		<div className='w-full border-b-[1px] flex flex-row items-center'>
			<NavLink to='/'>
				<img src={logo} alt='logo' width='80' className='px-2' />
			</NavLink>
			<ul className='gap-1 flex-row p-3 items-end hidden md:flex md:gap-3'>
				<li>
					<NavBarLink text='About' to='/about' className='text-xl' />
				</li>
				<NavBarRule />
				<li>
					<NavBarLink text='★ Best Sellers ★' to='/best-sellers' />
				</li>
				<NavBarRule />
				<li>
					<NavBarLink text='✧ Secret Boxes ✧' to='/secret-boxes' />
				</li>
				<NavBarRule />
				<li>
					<button
						data-dropdown-toggle='snacks-list'
						data-dropdown-offset-distance='10'
						data-dropdown-offset-skidding='10'
						data-dropdown-trigger='hover'
						id='snacks-list-button'
					>
						<NavBarLink text='Snacks' to='/snacks' />
					</button>

					<div
						className='flex-col absolute bg-white hidden border'
						id='snacks-list'
						data-dropdown-trigger='hover'
					>
						<ul className='flex flex-col gap-4 p-4'>
							<li>
								<NavBarLink text='Pop Corn' to='/snacks/pop-corn' />
							</li>
							<li>
								<NavBarLink text='Crackers' to='/snacks/crackers' />
							</li>
							<li>
								<NavBarLink text='Chips' to='/snacks/chips' />
							</li>
							<li>
								<NavBarLink text='Croutons' to='/snacks/croutons' />
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	);
};
