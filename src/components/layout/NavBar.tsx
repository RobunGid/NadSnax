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
			<ul className='flex-row items-end hidden md:flex md:gap-3'>
				<li>
					<NavBarLink to='/about' text='About' />
				</li>
				<NavBarRule />
				<li>
					<NavBarLink to='/best-sellers' text='★ Best Sellers ★' />
				</li>
				<NavBarRule />
				<li>
					<NavBarLink to='/secret-boxes' text='✧ Secret Boxes ✧' />
				</li>
				<NavBarRule />

				<li>
					<button
						data-dropdown-toggle='snacks-list'
						data-dropdown-offset-distance='10'
						data-dropdown-offset-skidding='25'
						data-dropdown-trigger='hover'
						id='snacks-list-button'
						className='flex items-center'
					>
						<NavBarLink to='/snacks' className='flex' text='Snacks'>
							<span className='after:content-ArrowDownIcon after:inline-block after:w-[18px] after:pl-1'></span>
						</NavBarLink>
					</button>

					<div
						className='flex-col absolute bg-white hidden border'
						id='snacks-list'
						data-dropdown-trigger='hover'
					>
						<ul className='flex flex-col gap-4 p-6 w-36'>
							<li>
								<NavBarLink to='/snacks/pop-corn' text='Pop-Corn' />
							</li>
							<li>
								<NavBarLink to='/snacks/crackers' text='Crackers' />
							</li>
							<li>
								<NavBarLink to='/snacks/chips' text='Chips' />
							</li>
							<li>
								<NavBarLink to='/snacks/croutons' text='Croutons' />
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	);
};
