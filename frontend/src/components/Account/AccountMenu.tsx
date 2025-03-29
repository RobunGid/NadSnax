import { BiHelpCircle, BiHistory, BiInfoCircle, BiStar, BiUser } from 'react-icons/bi';
import { AccountMenuItem } from './AccountMenuItem';
import { AccountMenuUserInfo } from './AccountMenuUserInfo';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaSignOutAlt } from 'react-icons/fa';

export const AccountMenu = () => {
	return (
		<div className='rounded-[40px] dark:bg-gray-800 bg-gray-200 w-96'>
			<ul className='divide-y divide-gray-900'>
				<AccountMenuUserInfo />
				<AccountMenuItem to='/account/profile'>
					<BiUser />
					Profile
				</AccountMenuItem>
				<li>
					<ul>
						<AccountMenuItem to='/account/order_history'>
							<BiHistory />
							Order History
						</AccountMenuItem>
						<AccountMenuItem to='/account/reviews'>
							<BiStar />
							Reviews
						</AccountMenuItem>
					</ul>
				</li>
				<AccountMenuItem to='/account/recently_viewed'>
					<FaMagnifyingGlass />
					Recently viewed
				</AccountMenuItem>
				<AccountMenuItem to='/account/settings'>
					<IoSettingsOutline />
					Settings
				</AccountMenuItem>
				<li>
					<ul>
						<AccountMenuItem to='/account/statistics'>
							<BiInfoCircle />
							Statistics
						</AccountMenuItem>
						<AccountMenuItem to='/account/help'>
							<BiHelpCircle />
							Help
						</AccountMenuItem>
					</ul>
				</li>
				<AccountMenuItem to='/account/signout' last>
					<FaSignOutAlt />
					Sign out
				</AccountMenuItem>
			</ul>
		</div>
	);
};
