import { useTranslate } from '../../i18n/i18n';
import { ThemeSwitcher } from '../Layout/ThemeSwitcher';

export const ProfileMenuThemeSwitcher = () => {
	const translate = useTranslate();
	return (
		<li className='flex items-center'>
			<ThemeSwitcher className='m-2' />
			<div className='text-xs'>{translate('profile_menu.theme_switcher')}</div>
		</li>
	);
};
