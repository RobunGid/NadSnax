import { AccountMenuItem } from './AccountMenuItem';
import { AccountMenuUserInfo } from './AccountMenuUserInfo';

export const AccountMenu = () => {
	return (
		<div className='rounded-[40px] dark:bg-gray-800 bg-gray-200 w-[600px]'>
			<ul className='divide-y divide-gray-900'>
				<AccountMenuUserInfo />
				<AccountMenuItem.Profile />
				<li>
					<ul>
						<AccountMenuItem.OrderHistory />
						<AccountMenuItem.Reviews />
					</ul>
				</li>
				<AccountMenuItem.RecentlyViewed />

				<li>
					<ul>
						<AccountMenuItem.Help />
						<AccountMenuItem.Statistics />
					</ul>
				</li>
				<AccountMenuItem.Settings />
			</ul>
		</div>
	);
};
