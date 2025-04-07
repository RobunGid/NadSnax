import { UINavbarItem } from './UI/UINavbarItem';

export const NavbarItem = {
	Home: () => (
		<li>
			<UINavbarItem to='/home' text='Home' className='pl-3' />
		</li>
	),
	BestSellers: () => (
		<li>
			<UINavbarItem
				to='/products/best-sellers'
				text='Best Sellers'
				className='pl-3'
			/>
		</li>
	),
	SecretBoxes: () => (
		<li>
			<UINavbarItem
				to='/products/secretboxes'
				text='Secret Boxes'
				className='pl-3'
			/>
		</li>
	),
};
