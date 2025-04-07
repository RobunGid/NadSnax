import { NavbarLink } from './NavbarLink';
import { ItemCategory } from '../../types';
import { GoChevronDown } from 'react-icons/go';

interface NavbarDropdownProps {
	category: ItemCategory;
	to: string;
	text: string;
}

export const NavbarDropdown = ({ category, text, to }: NavbarDropdownProps) => {
	return (
		<>
			<button id='snacks-list-button' className='flex items-center peer'>
				<NavbarLink to={to} className='flex' text={text}>
					<GoChevronDown
						className='inline-block m-1 bg-transparent'
						size='20px'
					/>
				</NavbarLink>
			</button>
			<div className='flex-col absolute bg-white dark:bg-gray-700 scale-y-0 border dark:border-gray-500 peer-hover:scale-y-100 peer-focus-within:scale-y-100 origin-top transition-transform hover:scale-y-100'>
				<ul className='flex flex-col gap-4 p-6 w-36'>
					{category.types.map((product) => (
						<li key={product.name}>
							<NavbarLink to={product.pageLink} text={product.name} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
