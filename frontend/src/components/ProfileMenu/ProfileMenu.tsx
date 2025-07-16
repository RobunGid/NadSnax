import { signoutThunk, useAppDispatch, useStateSelector } from '../../store';
import { ProfileMenuItem } from './ProfileMenuItem';
import { ProfileMenuButton } from './ProfileMenuButton';
import { MouseEventHandler, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ProfileMenuThemeSwitcher } from './ProfileMenuThemeSwitcher';
import { UIProfileMenuUserInfo } from './UI/UIProfileMenuUserInfo';
import { UIProfileMenu } from './UI/UIProfileMenu';
import { useOutside } from '../../hooks/useOutside';

export const ProfileMenu = () => {
	const user = useStateSelector((state) => state.user.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const profileMenuRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleSignout: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();
		dispatch(signoutThunk());
		navigate('/products');
	};

	const handleCloseProfileMenu = () => {
		if (inputRef.current) {
			inputRef.current.checked = false;
		}
	};

	useOutside({ onClickOutside: handleCloseProfileMenu, element: profileMenuRef });

	const hasControlPanelAccess = user && user.role == 'admin';

	return (
		user && (
			<div className='m-2' ref={profileMenuRef}>
				<ProfileMenuButton user={user} inputRef={inputRef} />
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
					{hasControlPanelAccess && <ProfileMenuItem.ControlPanel />}
				</UIProfileMenu>
			</div>
		)
	);
};
