import { ComponentProps, FC } from 'react';
import { SiteLogo } from '../NavBar/SiteLogo';
import { GoArrowLeft, GoHome } from 'react-icons/go';
import { NavBarLink } from '../UI/NavBarLink';
import { CiGift } from 'react-icons/ci';
import { GiChipsBag } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdMenu, MdStarOutline } from 'react-icons/md';
import clsx from 'clsx';

interface SideBarProps {
	className?: ComponentProps<'div'>['className'];
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
	return (
		<div className={clsx(className, 'group')}>
			<button
				className='ml-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
				type='button'
				data-drawer-target='drawer-navigation'
				data-drawer-show='drawer-navigation'
				aria-controls='drawer-navigation'
			>
				<MdMenu size='24' />
			</button>

			<div
				id='drawer-navigation'
				className='peer fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
				aria-labelledby='drawer-navigation-label'
			>
				<div className='flex items-center justify-start rtl:justify-end'>
					<NavBarLink to='/about'>
						<SiteLogo />
						<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
							NadSnax
						</span>
					</NavBarLink>
				</div>

				<button
					type='button'
					data-drawer-hide='drawer-navigation'
					aria-controls='drawer-navigation'
					className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
				>
					<GoArrowLeft size='24' />
					<span className='sr-only'>Close menu</span>
				</button>
				<div className='py-4 overflow-y-auto'>
					<ul className='space-y-2 font-medium'>
						<li>
							<a
								href='#'
								className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
							>
								<GoHome size='24' />
								<span className='ms-3'>About</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
							>
								<MdStarOutline size='24' />
								<span className='ms-3'>Best Sellers</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
							>
								<CiGift size='24' />
								<span className='ms-3'>Secret Boxes</span>
							</a>
						</li>
						<li>
							<button
								type='button'
								className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
								aria-controls='dropdown-example'
								data-collapse-toggle='dropdown-example'
							>
								<GiChipsBag size='24' />
								<span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>
									Snacks
								</span>
								<IoIosArrowDown />
							</button>
							<ul id='dropdown-example' className='hidden py-2 space-y-2'>
								<li>
									<a
										href='#'
										className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
									>
										Pop-Corn
									</a>
								</li>
								<li>
									<a
										href='#'
										className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
									>
										Crackers
									</a>
								</li>
								<li>
									<a
										href='#'
										className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
									>
										Chips
									</a>
								</li>
								<li>
									<a
										href='#'
										className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
									>
										Croutons
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className='absolute inset-0 bg-black bg-opacity-50 pointer-events-none peer-aria-hidden:hidden'></div>
		</div>
	);
};
