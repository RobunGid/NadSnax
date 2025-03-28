import { BiHelpCircle, BiInfoCircle, BiStar, BiUser } from 'react-icons/bi';
import { AccountMenuItem } from './AccountMenuItem';
import { AccountMenuUserInfo } from './AccountMenuUserInfo';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaSignOutAlt } from 'react-icons/fa';

export const AccountMenu = () => {
	return (
		<div className='rounded-[40px] bg-gray-800 w-96'>
			<ul>
				<AccountMenuUserInfo />
				<AccountMenuItem to='/account/orders'>
					<BiUser />
					Orders
				</AccountMenuItem>
				<AccountMenuItem to='/account/orders'>
					<BiStar />
					Reviews
				</AccountMenuItem>
				<hr className='border-gray-900' />
				<AccountMenuItem to='/account/settings'>
					<FaMagnifyingGlass />
					Recently viewed
				</AccountMenuItem>
				<hr className='border-gray-900' />
				<AccountMenuItem to='/account/settings'>
					<IoSettingsOutline />
					Settings
				</AccountMenuItem>
				<AccountMenuItem to='/account/statistics'>
					<BiInfoCircle />
					Statistics
				</AccountMenuItem>
				<hr className='border-gray-900' />
				<AccountMenuItem to='/account/help'>
					<BiHelpCircle />
					Help
				</AccountMenuItem>
				<hr className='border-gray-900' />

				<AccountMenuItem to='/account/settings' last>
					<FaSignOutAlt />
					Sign out
				</AccountMenuItem>
			</ul>
		</div>
	);
};
