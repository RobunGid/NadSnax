export const getAppTheme = () => {
	const savedTheme = localStorage.getItem('theme');
	const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';

	const isLight = savedTheme == 'light' || preferedTheme == 'light';

	return isLight ? 'light' : 'dark';
};
