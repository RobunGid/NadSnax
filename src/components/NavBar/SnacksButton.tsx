import { FC } from 'react';
import { NavBarLink } from './NavBarLink';
import { GoChevronDown } from 'react-icons/go';

export const SnacksButton: FC = () => {
	return (
		<button id='snacks-list-button' className='flex items-center peer'>
			<NavBarLink to='/snacks' className='flex' text='Snacks'>
				<GoChevronDown className='inline-block mt-1 ml-1' size='20px' />
			</NavBarLink>
		</button>
	);
};
