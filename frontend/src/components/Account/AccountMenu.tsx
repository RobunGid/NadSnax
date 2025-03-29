import { BiHelpCircle, BiHistory, BiInfoCircle, BiStar, BiUser } from 'react-icons/bi';
import { AccountMenuItem } from './AccountMenuItem';
import { AccountMenuUserInfo } from './AccountMenuUserInfo';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaSignOutAlt } from 'react-icons/fa';

export const AccountMenu = () => {
	return (
		<div className='rounded-[40px] bg-gray-800 w-96'>
			<ul className='divide-y divide-gray-900'>
				<AccountMenuUserInfo />
				<AccountMenuItem to='/account/orders'>
					<BiUser />
					Profile
				</AccountMenuItem>
				<li>
					<ul>
						<AccountMenuItem to='/account/orders'>
							<BiHistory />
							Order History
						</AccountMenuItem>
						<AccountMenuItem to='/account/reviews'>
							<BiStar />
							Reviews
						</AccountMenuItem>
					</ul>
				</li>
				<AccountMenuItem to='/account/settings'>
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
				<AccountMenuItem to='/account/settings' last>
					<FaSignOutAlt />
					Sign out
				</AccountMenuItem>
			</ul>
		</div>
	);
};
