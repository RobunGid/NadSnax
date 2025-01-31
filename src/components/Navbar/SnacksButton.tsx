import { FC } from 'react';
import { NavbarLink } from './NavbarLink';
import { GoChevronDown } from 'react-icons/go';

export const SnacksButton: FC = () => {
	return (
		<button id='snacks-list-button' className='flex items-center peer'>
			<NavbarLink to='/snacks' className='flex' text='Snacks'>
				<GoChevronDown className='inline-block mt-1 ml-1' size='20px' />
			</NavbarLink>
		</button>
	);
};
