import { MouseEventHandler } from 'react';
import { signoutThunk, useAppDispatch, useStateSelector } from '../../store';
import { AccountMenuItem } from './AccountMenuItem';
import { AccountMenuUserInfo } from './AccountMenuUserInfo';
import { UIAccountMenu } from './UI/UIAccountMenu';
import { useNavigate } from 'react-router';

export const AccountMenu = () => {
	const user = useStateSelector((state) => state.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const handleSignout: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();
		dispatch(signoutThunk());
		navigate('/products');
	};

	return (
		<UIAccountMenu>
			<AccountMenuUserInfo user={user.user} status={user.status} />
			<AccountMenuItem.Profile />
			<AccountMenuItem.EditProfile />
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
			<AccountMenuItem.Signout onClick={handleSignout} />
		</UIAccountMenu>
	);
};
