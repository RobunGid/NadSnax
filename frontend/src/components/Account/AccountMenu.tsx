import { useStateSelector } from '../../store';
import { AccountMenuItem } from './AccountMenuItem';
import { AccountMenuUserInfo } from './AccountMenuUserInfo';
import { UIAccountMenu } from './UI/UIAccountMenu';

export const AccountMenu = () => {
	const user = useStateSelector((state) => state.user);
	return (
		<UIAccountMenu>
			<AccountMenuUserInfo user={user.user} status={user.status} />
			<AccountMenuItem.Profile />
			<li>
				<ul>
					<AccountMenuItem.OrderHistory />
					<AccountMenuItem.Reviews />
				</ul>
			</li>
			<li>
				<ul>
					<AccountMenuItem.RecentlyViewed />
					<AccountMenuItem.Favourites />
				</ul>
			</li>
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
