import { signoutThunk, useAppDispatch, useStateSelector } from '../../store';
import { ProfileMenuItem } from './ProfileMenuItem';
import { ProfileMenuButton } from './ProfileMenuButton';
import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router';
import { ProfileMenuThemeSwitcher } from './ProfileMenuThemeSwitcher';
import { UIProfileMenuUserInfo } from './UI/UIProfileMenuUserInfo';
import { UIProfileMenu } from './UI/UIProfileMenu';
import { useTranslate } from '../../i18n/i18n';

export const ProfileMenu = () => {
	const user = useStateSelector((state) => state.user.user);

	const dispatch = useAppDispatch();

	const translate = useTranslate();

	const navigate = useNavigate();

	const handleSignout: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();
		dispatch(signoutThunk());
		navigate('/products');
	};

	const hasAdminPanel = user && user.role == 'admin';

	return (
		user && (
			<div className='m-2'>
				<ProfileMenuButton user={user} />
				<UIProfileMenu>
					<ProfileMenuThemeSwitcher />

					<ProfileMenuItem.Profile translate={translate} />
					<ProfileMenuItem.Favorites translate={translate} />

					<UIProfileMenuUserInfo
						firstName={user?.firstName}
						lastName={user?.lastName}
						username={user?.username}
					/>
					<li>
						<ul>
							<ProfileMenuItem.OrderHistory translate={translate} />
							<ProfileMenuItem.Settings translate={translate} />
							<ProfileMenuItem.Reviews translate={translate} />
						</ul>
					</li>

					<ProfileMenuItem.SignOut
						onClick={handleSignout}
						translate={translate}
					/>
					{hasAdminPanel && (
						<ProfileMenuItem.AdminPanel translate={translate} />
					)}
				</UIProfileMenu>
			</div>
		)
	);
};
