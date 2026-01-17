import { Language } from '../types';

export const languages: Language[] = [
	{ key: 'en', name: 'English' },
	{ key: 'ru', name: 'Русский' },
];

export const defaultLanguage = languages[0] as Language;
