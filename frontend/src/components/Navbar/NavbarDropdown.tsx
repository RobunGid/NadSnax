import { ItemCategory } from '../../types';
import { UINavbarDropdown } from './UI/UINavbarDropdown';
import { UINavbarItem } from './UI/UINavbarItem';

interface NavbarDropdownProps {
	category: ItemCategory;
	text: string;
}

export const NavbarDropdown = ({ category, text }: NavbarDropdownProps) => {
	return (
		<>
			<UINavbarItem
				to={category.pageLink}
				className='flex peer peer pl-6'
				text={text}
				iconPosition='right'
			/>

			<UINavbarDropdown>
				{category.types.map((product) => (
					<li key={product.name}>
						<UINavbarItem to={product.pageLink} text={product.name} />
					</li>
				))}
			</UINavbarDropdown>
		</>
	);
};
