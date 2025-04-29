import { signoutThunk, useAppDispatch, useStateSelector } from '../../store';
import { ProfileMenuItem } from './ProfileMenuItem';
import { ProfileMenuButton } from './ProfileMenuButton';
import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router';
import { ProfileMenuThemeSwitcher } from './ProfileMenuThemeSwitcher';
import { UIProfileMenuUserInfo } from './UI/UIProfileMenuUserInfo';

export const ProfileMenu = () => {
	const user = useStateSelector((state) => state.user.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const handleSignout: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();
		dispatch(signoutThunk());
		navigate('/products');
	};

	return (
		<div className='m-2'>
			<ProfileMenuButton user={user} />

			<ul className='overflow-hidden duration-200 max-h-0 peer-has-[:checked]:max-h-[350px] absolute right-2 top-16 z-10 bg-gray-200 divide-y divide-gray-300 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600'>
				<ProfileMenuThemeSwitcher />

				<ProfileMenuItem.Profile />
				<ProfileMenuItem.Favourites />

				<UIProfileMenuUserInfo />
				<li>
					<ul>
						<ProfileMenuItem.OrderHistory />
						<ProfileMenuItem.Settings />
						<ProfileMenuItem.Reviews />
					</ul>
				</li>

				<ProfileMenuItem.SignOut onClick={handleSignout} />
			</ul>
		</div>
	);
};
