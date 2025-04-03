import { GoHome } from 'react-icons/go';
import { SidebarItemContainer } from './SidebarItemContainer';
import { CiGift } from 'react-icons/ci';
import { MdStarOutline } from 'react-icons/md';

export const SidebarItem = {
	Home: () => (
		<SidebarItemContainer to='/home'>
			<GoHome />
			<span className='ms-3'>Home</span>
		</SidebarItemContainer>
	),
	SecretBoxes: () => (
		<SidebarItemContainer to='/products/secretboxes'>
			<CiGift />
			<span className='ms-3'>Secret Boxes</span>
		</SidebarItemContainer>
	),
	BestSellers: () => (
		<SidebarItemContainer to='/products/best-sellers'>
			<MdStarOutline />
			<span className='ms-3'>Best Sellers</span>
		</SidebarItemContainer>
	),
};
