import clsx from 'clsx';
import { FC, ReactNode, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { SidebarItem } from './SidebarItem';

type option = {
	to: string;
	name: string;
};

interface SidebarSelectProps {
	name: string;
	icon: ReactNode;
	options: option[];
}

export const SidebarSelect: FC<SidebarSelectProps> = ({ name, icon, options }) => {
	const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);

	const handleToggleVisibility = () => {
		setOptionsVisibility((prevVisible) => !prevVisible);
	};

	return (
		<>
			<button
				type='button'
				className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
				onClick={handleToggleVisibility}
			>
				{icon}
				<span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>
					{name}
				</span>
				<IoIosArrowDown
					className={clsx(
						'transition-transform',
						optionsVisibility && 'rotate-180'
					)}
				/>
			</button>
			<ul
				id='dropdown-snacks'
				className={clsx(
					'scale-y-0 py-2 space-y-2 transition-transform origin-top pl-3',
					optionsVisibility ? 'scale-y-100' : 'scale-y-0'
				)}
			>
				{options.map((option) => (
					<SidebarItem to={option.to} key={option.to}>
						<span className='pl-5'>{option.name}</span>
					</SidebarItem>
				))}
			</ul>
		</>
	);
};
