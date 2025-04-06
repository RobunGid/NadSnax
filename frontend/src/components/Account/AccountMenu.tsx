import { AccountMenuItem } from './AccountMenuItem';
import { AccountMenuUserInfo } from './AccountMenuUserInfo';
import { UIAccountMenu } from './UI/UIAccountMenu';

export const AccountMenu = () => {
	return (
		<UIAccountMenu>
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
			<AccountMenuItem.Signout />
		</UIAccountMenu>
	);
};
