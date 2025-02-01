import { FC } from 'react';
import { NavbarLink } from './NavbarLink';
import { GoChevronDown } from 'react-icons/go';

interface NavbarDropdownButtonProps {
	text: string;
	to: string;
}

export const NavbarDropdownButton: FC<NavbarDropdownButtonProps> = ({ text, to }) => {
	return (
		<button id='snacks-list-button' className='flex items-center peer'>
			<NavbarLink to={to} className='flex' text={text}>
				<GoChevronDown className='inline-block mt-1 ml-1' size='20px' />
			</NavbarLink>
		</button>
	);
};
