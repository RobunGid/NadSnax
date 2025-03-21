import clsx from 'clsx';
import { FC, MouseEventHandler, useState } from 'react';
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

	const handleToggleVisibility: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setOptionsVisibility((prevVisible) => !prevVisible);
	};

	return (
		<>
			<SidebarItem to={category.pageLink} className='m-0 py-1.5'>
				<button
					type='button'
					className='flex items-center justify-between w-full text-base text-gray-900 dark:text-white transition duration-75 rounded-lg'
				>
					<img
						src={category.iconUrl}
						alt={`${category.name} icon`}
						className='size-6 invert dark:filter-none'
					></img>
					<span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap transition'>
						{category.name}
					</span>

					<div className='w-10' onClick={handleToggleVisibility}>
						<IoIosArrowDown
							className={clsx(
								'transition-transform duration-[250ms] origin-center float-end m-2',
								optionsVisibility && 'rotate-180'
							)}
						/>
					</div>
				</button>
			</SidebarItem>
			<ul
				id='dropdown-snacks'
				className={clsx(
					'transition-all pl-3 overflow-hidden space-y-2',
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
		</>
	);
};
