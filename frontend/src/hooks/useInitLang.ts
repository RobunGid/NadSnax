import { useEffect } from 'react';
import { predicateLanguageCode } from '../types';
import { languages } from '../logic/languages';
import { useI18n } from '../i18n/i18n';

export const useInitLang = () => {
	const { lang, setLang } = useI18n();
	useEffect(() => {
		const savedLang = sessionStorage.getItem('lang');
		const languageKeys = languages.map((lang) => lang.key);
		if (
			typeof savedLang == 'string' &&
			predicateLanguageCode(savedLang) &&
			languageKeys.includes(savedLang) &&
			savedLang != lang
		) {
			setLang(savedLang);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
