import { ChangeEvent, EventHandler } from 'react';
import { getAppTheme } from '../../logic/getAppTheme';
import { UISwitcher } from '../UI/UISwitcher';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const defaultTheme = getAppTheme();

	const handleChangeTheme: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
		const isLightTheme = event.target.checked;
		localStorage.theme = isLightTheme ? 'light' : 'dark';

		document.documentElement.classList.toggle('dark', !isLightTheme);
	};

	return (
		<UISwitcher
			defaultChecked={defaultTheme == 'light'}
			onChange={handleChangeTheme}
			className={className}
		/>
	);
};
