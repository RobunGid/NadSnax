import { FC, ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router';

type option = {
	to: string;
	name: string;
};

interface SideBarSelectProps {
	name: string;
	icon: ReactNode;
	options: option[];
}

export const SideBarSelect: FC<SideBarSelectProps> = ({ name, icon, options }) => {
	return (
		<>
			<button
				type='button'
				className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
				aria-controls='dropdown-snacks'
				data-collapse-toggle='dropdown-snacks'
			>
				{icon}
				<span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>
					{name}
				</span>
				<IoIosArrowDown />
			</button>
			<ul id='dropdown-snacks' className='hidden py-2 space-y-2'>
				{options.map((option) => (
					<li key={option.name}>
						<NavLink
							to={option.to}
							className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
						>
							{option.name}
						</NavLink>
					</li>
				))}
			</ul>
		</>
	);
};
