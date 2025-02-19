import clsx from 'clsx';
import { FC, useState } from 'react';
import { SidebarItem } from './SidebarItem';
import { IoIosArrowDown } from 'react-icons/io';
import { ItemCategory } from '../../types';

type option = {
	to: string;
	name: string;
};

interface SidebarSelectProps {
	name: string;
	iconUrl: string;
	options: option[];
	to: string;
	category: ItemCategory;
}

export const SidebarSelect: FC<SidebarSelectProps> = ({ category }) => {
	const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);

	const handleToggleVisibility = () => {
		setOptionsVisibility((prevVisible) => !prevVisible);
	};

	return (
		<li>
			<button
				type='button'
				className='flex items-center justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
			>
				<SidebarItem to={category.pageLink} className='p-0'>
					<img
						src={category.iconUrl}
						alt={`${category.name} icon`}
						className='size-6'
					></img>
					<span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>
						{category.name}
					</span>
				</SidebarItem>

				<div className='w-10' onClick={handleToggleVisibility}>
					<IoIosArrowDown
						className={clsx(
							'transition-transform origin-center float-end',
							optionsVisibility && 'rotate-180'
						)}
					/>
				</div>
			</button>
			<ul
				id='dropdown-snacks'
				className={clsx(
					'transition-all pl-3 overflow-hidden space-y-1.5',
					optionsVisibility ? 'max-h-80' : 'max-h-0'
				)}
			>
				{category.types.map((type) => (
					<SidebarItem to={type.pageLink} key={type.id}>
						<img
							src={type.iconUrl}
							alt={`${type.name} icon`}
							className='size-6'
						></img>
						<span className='pl-5'>{type.name}</span>
					</SidebarItem>
				))}
			</ul>
		</li>
	);
};
