import { ItemCategory } from '../../types';
import { NavbarDropdown } from './NavbarDropdown';
import { UINavbarItemContainer } from './UI/UINavbarItemContainer';

interface NavbarCategoriesProps {
	categories: ItemCategory[];
}
export const NavbarCategories = ({ categories }: NavbarCategoriesProps) => {
	return (
		<>
			{categories.map((category) => (
				<UINavbarItemContainer key={category.id}>
					<NavbarDropdown text={category.name} category={category} />
				</UINavbarItemContainer>
			))}
		</>
	);
};
