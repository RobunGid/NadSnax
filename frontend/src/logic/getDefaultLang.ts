import { LanguageCodes, predicateLanguageCode } from '../types';

export const getDefaultLang = (): LanguageCodes => {
	const savedLang = sessionStorage.getItem('lang');
	if (typeof savedLang == 'string' && predicateLanguageCode(savedLang)) {
		return savedLang;
	} else {
		return 'en';
	}
};
