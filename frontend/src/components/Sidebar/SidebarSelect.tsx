import { MouseEventHandler, useState } from 'react';
import { ItemCategory } from '../../types';
import { SidebarCategory } from './UI/UISidebarCategory';
import { SidebarSelectOptions } from './UISidebarSelectOptions';

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

export const SidebarSelect = ({ category }: SidebarSelectProps) => {
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
				options={category.types}
				className={optionsVisibility ? 'max-h-80' : 'max-h-0'}
			/>
		</>
	);
};
