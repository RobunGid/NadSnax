import { FC } from 'react';
import { NavbarLink } from './NavbarLink';

export const SnacksDropdown: FC = () => {
	return (
		<div className='flex-col absolute bg-white scale-y-0 border peer-hover:scale-y-100 peer-focus-within:scale-y-100 origin-top transition-transform hover:scale-y-100'>
			<ul className='flex flex-col gap-4 p-6 w-36'>
				<li>
					<NavbarLink to='/snacks/pop-corn' text='Pop-Corn' />
				</li>
				<li>
					<NavbarLink to='/snacks/crackers' text='Crackers' />
				</li>
				<li>
					<NavbarLink to='/snacks/chips' text='Chips' />
				</li>
				<li>
					<NavbarLink to='/snacks/croutons' text='Croutons' />
				</li>
			</ul>
		</div>
	);
};
