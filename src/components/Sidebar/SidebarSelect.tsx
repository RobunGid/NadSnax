import clsx from 'clsx';
import { FC, useState } from 'react';
import { SidebarItem } from './SidebarItem';
import { GiChipsBag } from 'react-icons/gi';
import { LuCandy } from 'react-icons/lu';
import { RiDrinks2Fill } from 'react-icons/ri';
import { IconType } from 'react-icons';
import { IoIosArrowDown } from 'react-icons/io';
import { icon } from '../../types';

type option = {
	to: string;
	name: string;
};

interface SidebarSelectProps {
	name: string;
	icon: icon;
	options: option[];
}

export const SidebarSelect: FC<SidebarSelectProps> = ({ name, icon, options }) => {
	const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);

	const handleToggleVisibility = () => {
		setOptionsVisibility((prevVisible) => !prevVisible);
	};

	const icons: Record<icon, IconType> = {
		'gi/GiChipsBag': GiChipsBag,
		'lu/LuCandy': LuCandy,
		'ri/RiDrinks2Fill': RiDrinks2Fill,
	};

	const IconElement = icons[icon];

	return (
		<li>
			<button
				type='button'
				className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
				onClick={handleToggleVisibility}
			>
				<IconElement />
				<span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>
					{name}
				</span>
				<IoIosArrowDown
					className={clsx(
						'transition-transform origin-center',
						optionsVisibility && 'rotate-180'
					)}
				/>
			</button>
			<ul
				id='dropdown-snacks'
				className={clsx(
					'transition-all pl-3 overflow-hidden space-y-1.5',
					optionsVisibility ? 'max-h-80' : 'max-h-0'
				)}
			>
				{options.map((option) => (
					<SidebarItem to={option.to} key={option.to}>
						<span className='pl-5'>{option.name}</span>
					</SidebarItem>
				))}
			</ul>
		</li>
	);
};
