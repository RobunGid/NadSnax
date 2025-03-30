import { ChangeEvent, EventHandler } from 'react';
import { getAppTheme } from '../../logic/getAppTheme';
import { UIThemeSwitcher } from '../UI/UIThemeSwitcher';

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
		<UIThemeSwitcher
			defaultChecked={defaultTheme == 'light'}
			onChange={handleChangeTheme}
			className={className}
		/>
	);
};
