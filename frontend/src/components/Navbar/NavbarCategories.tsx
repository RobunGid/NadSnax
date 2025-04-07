import { ItemCategory } from '../../types';
import { NavbarDropdown } from './NavbarDropdown';

interface NavbarCategoriesProps {
	categories: ItemCategory[];
}
export const NavbarCategories = ({ categories }: NavbarCategoriesProps) => {
	return (
		<>
			{categories.map((category) => (
				<li key={category.id} className='z-10'>
					<NavbarDropdown text={category.name} category={category} />
				</li>
			))}
		</>
	);
};
