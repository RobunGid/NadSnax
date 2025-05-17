import { signoutThunk, useAppDispatch, useStateSelector } from '../../store';
import { ProfileMenuItem } from './ProfileMenuItem';
import { ProfileMenuButton } from './ProfileMenuButton';
import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router';
import { ProfileMenuThemeSwitcher } from './ProfileMenuThemeSwitcher';
import { UIProfileMenuUserInfo } from './UI/UIProfileMenuUserInfo';
import { UIProfileMenu } from './UI/UIProfileMenu';

export const ProfileMenu = () => {
	const { user } = useStateSelector((state) => state.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const handleSignout: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();
		dispatch(signoutThunk());
		navigate('/products');
	};

	return (
		user && (
			<div className='m-2'>
				<ProfileMenuButton user={user} />

				<UIProfileMenu>
					<ProfileMenuThemeSwitcher />

					<ProfileMenuItem.Profile />
					<ProfileMenuItem.Favorites />

					<UIProfileMenuUserInfo
						firstName={user?.firstName}
						lastName={user?.lastName}
						username={user?.username}
					/>
					<li>
						<ul>
							<ProfileMenuItem.OrderHistory />
							<ProfileMenuItem.Settings />
							<ProfileMenuItem.Reviews />
						</ul>
					</li>

					<ProfileMenuItem.SignOut onClick={handleSignout} />
				</UIProfileMenu>
			</div>
		)
	);
};
