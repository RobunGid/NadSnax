import { MouseEventHandler, useState } from 'react';
import { ItemCategory, ItemType } from '../../types';
import { SidebarCategory } from './UI/UISidebarCategory';
import { SidebarSelectOptions } from './SidebarSelectOptions';

interface SidebarSelectProps {
	types: Omit<ItemType, 'category'>[];
	category: ItemCategory;
}

export const SidebarSelect = ({ types, category }: SidebarSelectProps) => {
	const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);

	const handleToggleVisibility: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setOptionsVisibility((prevVisible) => !prevVisible);
	};

	return (
		<>
			<SidebarCategory
				arrowClassName={optionsVisibility ? 'rotate-180' : ''}
				category={category}
				onClick={handleToggleVisibility}
			/>
			<SidebarSelectOptions
				options={types}
				className={optionsVisibility ? 'max-h-80' : 'max-h-0'}
			/>
		</>
	);
};
