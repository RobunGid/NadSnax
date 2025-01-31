import { FC } from 'react';
import { NavbarLink } from './NavbarLink';
import { category } from '../../mock';

interface NavbarDropdownProps {
	category: category;
}

export const NavbarDropdown: FC<NavbarDropdownProps> = ({
	category,
}: NavbarDropdownProps) => {
	return (
		<div className='flex-col absolute bg-white scale-y-0 border peer-hover:scale-y-100 peer-focus-within:scale-y-100 origin-top transition-transform hover:scale-y-100'>
			<ul className='flex flex-col gap-4 p-6 w-36'>
				{category.products.map((product) => (
					<li key={product.name}>
						<NavbarLink to={product.to} text={product.name} />
					</li>
				))}
			</ul>
		</div>
	);
};
