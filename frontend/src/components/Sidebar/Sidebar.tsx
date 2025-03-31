import { GoArrowLeft, GoHome } from 'react-icons/go';
import { CiGift } from 'react-icons/ci';
import { MdStarOutline } from 'react-icons/md';
import { SidebarItem } from './SidebarItem';
import SidebarHeader from './SidebarHeader';
import { SidebarSelect } from './SidebarSelect';
import clsx from 'clsx';
import { ItemCategory } from '../../types';
import { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';

interface SidebarProps {
	categories: ItemCategory[];
}

export const Sidebar = ({ categories }: SidebarProps) => {
	const { sidebarVisibility, toggleSidebarVisibility } = useContext(NavbarContext);
	return (
		<div className='group flex md:hidden'>
			<div
				className={clsx(
					'fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-slate-100 dark:bg-gray-800',
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
					<ul className='space-y-1 font-medium'>
						<SidebarItem to='/home'>
							<GoHome />
							<span className='ms-3'>Home</span>
						</SidebarItem>

						<SidebarItem to='/products/best-sellers'>
							<MdStarOutline />
							<span className='ms-3'>Best Sellers</span>
						</SidebarItem>

						<SidebarItem to='/products/secretboxes'>
							<CiGift />
							<span className='ms-3'>Secret Boxes</span>
						</SidebarItem>
						{categories.map((category) => {
							return (
								<SidebarSelect
									to={category.pageLink}
									key={category.id}
									name={category.name}
									iconUrl={category.iconUrl}
									options={category.types.map((type) => ({
										to: type.pageLink,
										name: type.name,
									}))}
									category={category}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
