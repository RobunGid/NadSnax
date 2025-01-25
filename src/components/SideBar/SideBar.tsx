import { ComponentProps, FC } from 'react';
import { GoArrowLeft, GoHome } from 'react-icons/go';
import { CiGift } from 'react-icons/ci';
import { MdMenu, MdStarOutline } from 'react-icons/md';
import clsx from 'clsx';
import { SideBarItem } from './SideBarItem';
import SideBarHeader from './SideBarHeader';
import { SideBarSelect } from './SideBarSelect';
import { GiChipsBag } from 'react-icons/gi';

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
				onClick={() => console.log(123)}
			>
				<span className='sr-only'>Open sidebar panel</span>
				<MdMenu />
			</button>

			<div
				id='drawer-navigation'
				className='peer fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
				aria-labelledby='drawer-navigation-label'
			>
				<SideBarHeader />

				<button
					type='button'
					data-drawer-hide='drawer-navigation'
					aria-controls='drawer-navigation'
					className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
				>
					<GoArrowLeft />
					<span className='sr-only'>Close menu</span>
				</button>
				<div className='py-4 overflow-y-auto'>
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
								{ name: 'Pop-Corn', to: '/snacks/pop-corn' },
								{ name: 'Crackers', to: '/snacks/crackers' },
								{ name: ' Chips', to: '/snacks/chips' },
								{ name: 'Croutons', to: '/snacks/croutons' },
							]}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};
