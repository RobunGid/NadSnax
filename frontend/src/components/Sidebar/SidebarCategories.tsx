import { ItemCategory } from '../../types';
import { SidebarSelect } from './SidebarSelect';

interface SidebarCategoriesProps {
	categories: ItemCategory[];
}

export const SidebarCategories = ({ categories }: SidebarCategoriesProps) => {
	return (
		<>
			{categories.map((category) => {
				return (
					<SidebarSelect
						key={category.id}
						category={category}
						types={category.types}
					/>
				);
			})}
		</>
	);
};
