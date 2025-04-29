import { ThemeSwitcher } from '../Layout/ThemeSwitcher';

export const ProfileMenuThemeSwitcher = () => {
	return (
		<li className='flex items-center'>
			<ThemeSwitcher className='m-2' />
			<div className='text-xs'>Change App Theme</div>
		</li>
	);
};
