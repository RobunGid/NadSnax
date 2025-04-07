import { ItemCategory } from '../../types';
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

			<div className='flex-col absolute bg-white dark:bg-gray-700 scale-y-0 border dark:border-gray-500 peer-hover:scale-y-100 peer-focus-within:scale-y-100 origin-top transition-transform hover:scale-y-100'>
				<ul className='flex flex-col gap-4 p-6 w-36'>
					{category.types.map((product) => (
						<li key={product.name}>
							<UINavbarItem to={product.pageLink} text={product.name} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
