import { FC, useState } from 'react';
import { GoArrowLeft, GoHome } from 'react-icons/go';
import { CiGift } from 'react-icons/ci';
import { MdMenu, MdStarOutline } from 'react-icons/md';
import { SideBarItem } from './SideBarItem';
import SideBarHeader from './SideBarHeader';
import { SideBarSelect } from './SideBarSelect';
import { GiChipsBag } from 'react-icons/gi';
import clsx from 'clsx';

export const SideBar: FC = () => {
	const [navbarVisibility, setNavbarVisibility] = useState<boolean>(false);

	const handleToggleVisibility = () => {
		setNavbarVisibility((prevVisible) => !prevVisible);
	};

	return (
		<div className='group flex md:hidden'>
			<button
				className='ml-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white peer'
				type='button'
				onClick={handleToggleVisibility}
			>
				<span className='sr-only'>Open sidebar panel</span>
				<MdMenu />
			</button>

			<div
				className={clsx(
					'peer fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800',
					navbarVisibility ? 'translate-x-0' : '-translate-x-full'
				)}
			>
				<SideBarHeader />

				<button
					type='button'
					className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
					onClick={handleToggleVisibility}
				>
					<GoArrowLeft />
					<span className='sr-only'>Close menu</span>
				</button>
				<div className='py-4 overflow-y-auto pointer-events-auto'>
					<ul className='space-y-2 font-medium'>
						<SideBarItem to='/about'>
							<GoHome />
							<span className='ms-3'>About</span>
						</SideBarItem>

						<SideBarItem to='/best-sellers'>
							<MdStarOutline />
							<span className='ms-3'>Best Sellers</span>
						</SideBarItem>

						<SideBarItem to='/secret-boxes'>
							<CiGift />
							<span className='ms-3'>Secret Boxes</span>
						</SideBarItem>
						<SideBarSelect
							name='Snacks'
							icon={<GiChipsBag />}
							options={[
								{ name: 'Pop-Corn', to: '/products/snacks/pop-corn' },
								{ name: 'Crackers', to: '/products/snacks/crackers' },
								{ name: ' Chips', to: '/products/snacks/chips' },
								{ name: 'Croutons', to: '/products/snacks/croutons' },
							]}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};
