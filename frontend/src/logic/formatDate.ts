import { LanguageCodes } from '../types';

export const formatDate = (dateString: string, language: LanguageCodes = 'en') => {
	const formatter = new Intl.DateTimeFormat(language, {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		weekday: 'long',
	});
	const date = new Date(dateString);
	const formattedDate = formatter.format(date);
	return formattedDate;
};
