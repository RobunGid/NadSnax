import { useEffect } from 'react';
import { getAppTheme } from '../logic/getAppTheme';

export const useInitTheme = () => {
	useEffect(() => {
		const theme = getAppTheme();

		document.documentElement.classList.add(theme);

		document.body.classList.add('dark:bg-gray-900');
		document.body.classList.add('dark:text-white');
	}, []);
};
