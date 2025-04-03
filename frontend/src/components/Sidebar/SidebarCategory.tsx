import { MouseEventHandler } from 'react';
import { ItemCategory } from '../../types';
import { SidebarItemContainer } from './SidebarItemContainer';
import clsx from 'clsx';
import { IoIosArrowDown } from 'react-icons/io';

interface SidebarCategoryProps {
	category: ItemCategory;
	onClick?: MouseEventHandler<HTMLDivElement>;
	arrowClassName?: string;
}

export const SidebarCategory = ({
	category,
	onClick,
	arrowClassName,
}: SidebarCategoryProps) => {
	return (
		<SidebarItemContainer to={category.pageLink} className='m-0 py-1.5'>
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

				<div className='w-10' onClick={onClick}>
					<IoIosArrowDown
						className={clsx(
							'transition-transform duration-[250ms] origin-center float-end m-2',
							arrowClassName
						)}
					/>
				</div>
			</button>
		</SidebarItemContainer>
	);
};
