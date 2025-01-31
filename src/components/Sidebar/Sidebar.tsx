import { FC, useContext } from 'react';
import { GoArrowLeft, GoHome } from 'react-icons/go';
import { CiGift } from 'react-icons/ci';
import { MdMenu, MdStarOutline } from 'react-icons/md';
import { SidebarItem } from './SidebarItem';
import SidebarHeader from './SidebarHeader';
import { SidebarSelect } from './SidebarSelect';
import clsx from 'clsx';
import { NavbarContext } from '../../context/NavbarContext';
import { categories } from '../../mock';

export const Sidebar: FC = () => {
	const { sidebarVisibility, toggleSidebarVisibility } = useContext(NavbarContext);

	return (
		<div className='group flex md:hidden'>
			<button
				className='ml-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white peer'
				type='button'
				onClick={toggleSidebarVisibility}
			>
				<span className='sr-only'>Open sidebar panel</span>
				<MdMenu />
			</button>

			<div
				className={clsx(
					'peer fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800',
					sidebarVisibility ? 'translate-x-0' : '-translate-x-full'
				)}
			>
				<SidebarHeader />

				<button
					type='button'
					className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
					onClick={toggleSidebarVisibility}
				>
					<GoArrowLeft />
					<span className='sr-only'>Close menu</span>
				</button>
				<div className='py-4 overflow-y-auto pointer-events-auto'>
					<ul className='space-y-2 font-medium'>
						<SidebarItem to='/home'>
							<GoHome />
							<span className='ms-3'>Home</span>
						</SidebarItem>

						<SidebarItem to='/best-sellers'>
							<MdStarOutline />
							<span className='ms-3'>Best Sellers</span>
						</SidebarItem>

						<SidebarItem to='/secret-boxes'>
							<CiGift />
							<span className='ms-3'>Secret Boxes</span>
						</SidebarItem>
						{Object.entries(categories).map(([name, entries]) => {
							return (
								<SidebarSelect
									key={name}
									name={name}
									icon={entries.icon}
									options={entries.products.map((item) => ({
										to: item.to,
										name: item.name,
									}))}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
