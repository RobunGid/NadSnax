import { FC } from 'react';
import { NavBarLink } from './NavBarLink';

export const SnacksDropdown: FC = () => {
	return (
		<div
			className='flex-col absolute bg-white hidden border'
			id='snacks-list'
			data-dropdown-trigger='hover'
		>
			<ul className='flex flex-col gap-4 p-6 w-36'>
				<li>
					<NavBarLink to='/snacks/pop-corn' text='Pop-Corn' />
				</li>
				<li>
					<NavBarLink to='/snacks/crackers' text='Crackers' />
				</li>
				<li>
					<NavBarLink to='/snacks/chips' text='Chips' />
				</li>
				<li>
					<NavBarLink to='/snacks/croutons' text='Croutons' />
				</li>
			</ul>
		</div>
	);
};
