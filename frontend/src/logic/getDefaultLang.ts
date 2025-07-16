import { LanguageCodes, predicateLanguageCode } from '../types';

export const getDefaultLang = (): LanguageCodes => {
	const sessionStorageLangValue = sessionStorage.getItem('lang');

	const savedLang =
		typeof sessionStorageLangValue == 'string' &&
		predicateLanguageCode(sessionStorageLangValue)
			? sessionStorageLangValue
			: null;
	const browserLangValue = navigator.language;
	const browserLang = predicateLanguageCode(browserLangValue) ? browserLangValue : null;
	const defaultLang = 'en';

	return savedLang || browserLang || defaultLang;
};
