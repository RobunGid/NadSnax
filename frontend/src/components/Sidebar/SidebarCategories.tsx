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
						to={category.pageLink}
						key={category.id}
						name={category.name}
						iconUrl={category.iconUrl}
						options={category.types.map((type) => ({
							to: type.pageLink,
							name: type.name,
						}))}
						category={category}
					/>
				);
			})}
		</>
	);
};
